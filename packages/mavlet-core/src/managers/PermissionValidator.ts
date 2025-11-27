import {
  MavletMessage,
  MavletMessageType,
  PermissionScope,
  PermissionEntity
} from '@mavrykdynamics/mavlet-types'
import { getAccountIdentifier } from '../utils/get-account-identifier'

/**
 * @internalapi
 *
 * The PermissionValidator is used to check if permissions for a certain message type have been given
 */
export class PermissionValidator {
  /**
   * Check if permissions were given for a certain message type.
   *
   * PermissionRequest and BroadcastRequest will always return true.
   *
   * @param message Mavlet Message
   */
  public static async hasPermission(
    message: MavletMessage,
    getOne: (id: string) => Promise<PermissionEntity | undefined>,
    getAll: () => Promise<PermissionEntity[]>
  ): Promise<boolean> {
    switch (message.type) {
      case MavletMessageType.PermissionRequest:
      case MavletMessageType.BroadcastRequest: {
        return true
      }
      case MavletMessageType.OperationRequest: {
        const accountIdentifier: string = await getAccountIdentifier(
          message.sourceAddress,
          message.network
        )

        const permission: PermissionEntity | undefined = await getOne(accountIdentifier)
        if (!permission) {
          return false
        }

        return permission.scopes.includes(PermissionScope.OPERATION_REQUEST)
      }
      case MavletMessageType.SignPayloadRequest: {
        const permissions: PermissionEntity[] = await getAll()
        const filteredPermissions: PermissionEntity[] = permissions.filter(
          (permission: PermissionEntity) => permission.address === message.sourceAddress
        )

        if (filteredPermissions.length === 0) {
          return false
        }

        return filteredPermissions.some((permission: PermissionEntity) =>
          permission.scopes.includes(PermissionScope.SIGN)
        )
      }
      default:
        throw new Error('Message not handled')
    }
  }
}
