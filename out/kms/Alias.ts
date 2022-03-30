
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {
    CancelKeyDeletionRequest,
    ConnectCustomKeyStoreRequest,
    CreateAliasRequest,
    CreateCustomKeyStoreRequest,
    CreateGrantRequest,
    DecryptRequest,
    DeleteAliasRequest,
    DeleteCustomKeyStoreRequest,
    DeleteImportedKeyMaterialRequest,
    DescribeKeyRequest,
    DisableKeyRequest,
    DisableKeyRotationRequest,
    DisconnectCustomKeyStoreRequest,
    EnableKeyRequest,
    EnableKeyRotationRequest,
    EncryptRequest,
    GenerateDataKeyRequest,
    GenerateDataKeyPairRequest,
    GenerateDataKeyPairWithoutPlaintextRequest,
    GenerateDataKeyWithoutPlaintextRequest,
    GetKeyPolicyRequest,
    GetKeyRotationStatusRequest,
    GetParametersForImportRequest,
    GetPublicKeyRequest,
    ImportKeyMaterialRequest,
    ListGrantsRequest,
    ListKeyPoliciesRequest,
    ListResourceTagsRequest,
    ListRetirableGrantsRequest,
    PutKeyPolicyRequest,
    ReEncryptRequest,
    ReplicateKeyRequest,
    RevokeGrantRequest,
    ScheduleKeyDeletionRequest,
    SignRequest,
    TagResourceRequest,
    UntagResourceRequest,
    UpdateAliasRequest,
    UpdateCustomKeyStoreRequest,
    UpdateKeyDescriptionRequest,
    UpdatePrimaryRegionRequest,
    VerifyRequest,
    CancelKeyDeletionResponse,
    ConnectCustomKeyStoreResponse,
    CreateCustomKeyStoreResponse,
    CreateGrantResponse,
    DecryptResponse,
    DeleteCustomKeyStoreResponse,
    DescribeKeyResponse,
    DisconnectCustomKeyStoreResponse,
    EncryptResponse,
    GenerateDataKeyResponse,
    GenerateDataKeyPairResponse,
    GenerateDataKeyPairWithoutPlaintextResponse,
    GenerateDataKeyWithoutPlaintextResponse,
    GetKeyPolicyResponse,
    GetKeyRotationStatusResponse,
    GetParametersForImportResponse,
    GetPublicKeyResponse,
    ImportKeyMaterialResponse,
    ListGrantsResponse,
    ListKeyPoliciesResponse,
    ListResourceTagsResponse,
    ReEncryptResponse,
    ReplicateKeyResponse,
    ScheduleKeyDeletionResponse,
    SignResponse,
    UpdateCustomKeyStoreResponse,
    VerifyResponse
} from "aws-sdk/clients/kms";

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.kms.Alias {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.kms.Alias>) {
        super(...args)
        this.client = new awssdk.KMS()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/kms-2014-11-01.normal.json"), this.client)
    }

    invokeCancelKeyDeletion(partialParams: ToOptional<{
      [K in keyof CancelKeyDeletionRequest & keyof CancelKeyDeletionRequest & keyof CancelKeyDeletionRequest & keyof CancelKeyDeletionRequest & keyof CancelKeyDeletionRequest]: (CancelKeyDeletionRequest & CancelKeyDeletionRequest & CancelKeyDeletionRequest & CancelKeyDeletionRequest & CancelKeyDeletionRequest)[K]
    }>): CancelKeyDeletionResponse {
        return this.client.cancelKeyDeletion(
            this.ops["CancelKeyDeletion"].apply(partialParams)
        );
    }

    invokeConnectCustomKeyStore(partialParams: ToOptional<{
      [K in keyof ConnectCustomKeyStoreRequest & keyof ConnectCustomKeyStoreRequest & keyof ConnectCustomKeyStoreRequest & keyof ConnectCustomKeyStoreRequest & keyof ConnectCustomKeyStoreRequest]: (ConnectCustomKeyStoreRequest & ConnectCustomKeyStoreRequest & ConnectCustomKeyStoreRequest & ConnectCustomKeyStoreRequest & ConnectCustomKeyStoreRequest)[K]
    }>): ConnectCustomKeyStoreResponse {
        return this.client.connectCustomKeyStore(
            this.ops["ConnectCustomKeyStore"].apply(partialParams)
        );
    }

    invokeCreateAlias(partialParams: ToOptional<{
      [K in keyof CreateAliasRequest & keyof CreateAliasRequest & keyof CreateAliasRequest & keyof CreateAliasRequest & keyof CreateAliasRequest]: (CreateAliasRequest & CreateAliasRequest & CreateAliasRequest & CreateAliasRequest & CreateAliasRequest)[K]
    }>): void {
        return this.client.createAlias(
            this.ops["CreateAlias"].apply(partialParams)
        );
    }

    invokeCreateCustomKeyStore(partialParams: ToOptional<{
      [K in keyof CreateCustomKeyStoreRequest & keyof CreateCustomKeyStoreRequest & keyof CreateCustomKeyStoreRequest & keyof CreateCustomKeyStoreRequest & keyof CreateCustomKeyStoreRequest]: (CreateCustomKeyStoreRequest & CreateCustomKeyStoreRequest & CreateCustomKeyStoreRequest & CreateCustomKeyStoreRequest & CreateCustomKeyStoreRequest)[K]
    }>): CreateCustomKeyStoreResponse {
        return this.client.createCustomKeyStore(
            this.ops["CreateCustomKeyStore"].apply(partialParams)
        );
    }

    invokeCreateGrant(partialParams: ToOptional<{
      [K in keyof CreateGrantRequest & keyof CreateGrantRequest & keyof CreateGrantRequest & keyof CreateGrantRequest & keyof CreateGrantRequest]: (CreateGrantRequest & CreateGrantRequest & CreateGrantRequest & CreateGrantRequest & CreateGrantRequest)[K]
    }>): CreateGrantResponse {
        return this.client.createGrant(
            this.ops["CreateGrant"].apply(partialParams)
        );
    }

    invokeDecrypt(partialParams: ToOptional<{
      [K in keyof DecryptRequest & keyof DecryptRequest & keyof DecryptRequest & keyof DecryptRequest & keyof DecryptRequest]: (DecryptRequest & DecryptRequest & DecryptRequest & DecryptRequest & DecryptRequest)[K]
    }>): DecryptResponse {
        return this.client.decrypt(
            this.ops["Decrypt"].apply(partialParams)
        );
    }

    invokeDeleteAlias(partialParams: ToOptional<{
      [K in keyof DeleteAliasRequest & keyof DeleteAliasRequest & keyof DeleteAliasRequest & keyof DeleteAliasRequest & keyof DeleteAliasRequest]: (DeleteAliasRequest & DeleteAliasRequest & DeleteAliasRequest & DeleteAliasRequest & DeleteAliasRequest)[K]
    }>): void {
        return this.client.deleteAlias(
            this.ops["DeleteAlias"].apply(partialParams)
        );
    }

    invokeDeleteCustomKeyStore(partialParams: ToOptional<{
      [K in keyof DeleteCustomKeyStoreRequest & keyof DeleteCustomKeyStoreRequest & keyof DeleteCustomKeyStoreRequest & keyof DeleteCustomKeyStoreRequest & keyof DeleteCustomKeyStoreRequest]: (DeleteCustomKeyStoreRequest & DeleteCustomKeyStoreRequest & DeleteCustomKeyStoreRequest & DeleteCustomKeyStoreRequest & DeleteCustomKeyStoreRequest)[K]
    }>): DeleteCustomKeyStoreResponse {
        return this.client.deleteCustomKeyStore(
            this.ops["DeleteCustomKeyStore"].apply(partialParams)
        );
    }

    invokeDeleteImportedKeyMaterial(partialParams: ToOptional<{
      [K in keyof DeleteImportedKeyMaterialRequest & keyof DeleteImportedKeyMaterialRequest & keyof DeleteImportedKeyMaterialRequest & keyof DeleteImportedKeyMaterialRequest & keyof DeleteImportedKeyMaterialRequest]: (DeleteImportedKeyMaterialRequest & DeleteImportedKeyMaterialRequest & DeleteImportedKeyMaterialRequest & DeleteImportedKeyMaterialRequest & DeleteImportedKeyMaterialRequest)[K]
    }>): void {
        return this.client.deleteImportedKeyMaterial(
            this.ops["DeleteImportedKeyMaterial"].apply(partialParams)
        );
    }

    invokeDescribeKey(partialParams: ToOptional<{
      [K in keyof DescribeKeyRequest & keyof DescribeKeyRequest & keyof DescribeKeyRequest & keyof DescribeKeyRequest & keyof DescribeKeyRequest]: (DescribeKeyRequest & DescribeKeyRequest & DescribeKeyRequest & DescribeKeyRequest & DescribeKeyRequest)[K]
    }>): DescribeKeyResponse {
        return this.client.describeKey(
            this.ops["DescribeKey"].apply(partialParams)
        );
    }

    invokeDisableKey(partialParams: ToOptional<{
      [K in keyof DisableKeyRequest & keyof DisableKeyRequest & keyof DisableKeyRequest & keyof DisableKeyRequest & keyof DisableKeyRequest]: (DisableKeyRequest & DisableKeyRequest & DisableKeyRequest & DisableKeyRequest & DisableKeyRequest)[K]
    }>): void {
        return this.client.disableKey(
            this.ops["DisableKey"].apply(partialParams)
        );
    }

    invokeDisableKeyRotation(partialParams: ToOptional<{
      [K in keyof DisableKeyRotationRequest & keyof DisableKeyRotationRequest & keyof DisableKeyRotationRequest & keyof DisableKeyRotationRequest & keyof DisableKeyRotationRequest]: (DisableKeyRotationRequest & DisableKeyRotationRequest & DisableKeyRotationRequest & DisableKeyRotationRequest & DisableKeyRotationRequest)[K]
    }>): void {
        return this.client.disableKeyRotation(
            this.ops["DisableKeyRotation"].apply(partialParams)
        );
    }

    invokeDisconnectCustomKeyStore(partialParams: ToOptional<{
      [K in keyof DisconnectCustomKeyStoreRequest & keyof DisconnectCustomKeyStoreRequest & keyof DisconnectCustomKeyStoreRequest & keyof DisconnectCustomKeyStoreRequest & keyof DisconnectCustomKeyStoreRequest]: (DisconnectCustomKeyStoreRequest & DisconnectCustomKeyStoreRequest & DisconnectCustomKeyStoreRequest & DisconnectCustomKeyStoreRequest & DisconnectCustomKeyStoreRequest)[K]
    }>): DisconnectCustomKeyStoreResponse {
        return this.client.disconnectCustomKeyStore(
            this.ops["DisconnectCustomKeyStore"].apply(partialParams)
        );
    }

    invokeEnableKey(partialParams: ToOptional<{
      [K in keyof EnableKeyRequest & keyof EnableKeyRequest & keyof EnableKeyRequest & keyof EnableKeyRequest & keyof EnableKeyRequest]: (EnableKeyRequest & EnableKeyRequest & EnableKeyRequest & EnableKeyRequest & EnableKeyRequest)[K]
    }>): void {
        return this.client.enableKey(
            this.ops["EnableKey"].apply(partialParams)
        );
    }

    invokeEnableKeyRotation(partialParams: ToOptional<{
      [K in keyof EnableKeyRotationRequest & keyof EnableKeyRotationRequest & keyof EnableKeyRotationRequest & keyof EnableKeyRotationRequest & keyof EnableKeyRotationRequest]: (EnableKeyRotationRequest & EnableKeyRotationRequest & EnableKeyRotationRequest & EnableKeyRotationRequest & EnableKeyRotationRequest)[K]
    }>): void {
        return this.client.enableKeyRotation(
            this.ops["EnableKeyRotation"].apply(partialParams)
        );
    }

    invokeEncrypt(partialParams: ToOptional<{
      [K in keyof EncryptRequest & keyof EncryptRequest & keyof EncryptRequest & keyof EncryptRequest & keyof EncryptRequest]: (EncryptRequest & EncryptRequest & EncryptRequest & EncryptRequest & EncryptRequest)[K]
    }>): EncryptResponse {
        return this.client.encrypt(
            this.ops["Encrypt"].apply(partialParams)
        );
    }

    invokeGenerateDataKey(partialParams: ToOptional<{
      [K in keyof GenerateDataKeyRequest & keyof GenerateDataKeyRequest & keyof GenerateDataKeyRequest & keyof GenerateDataKeyRequest & keyof GenerateDataKeyRequest]: (GenerateDataKeyRequest & GenerateDataKeyRequest & GenerateDataKeyRequest & GenerateDataKeyRequest & GenerateDataKeyRequest)[K]
    }>): GenerateDataKeyResponse {
        return this.client.generateDataKey(
            this.ops["GenerateDataKey"].apply(partialParams)
        );
    }

    invokeGenerateDataKeyPair(partialParams: ToOptional<{
      [K in keyof GenerateDataKeyPairRequest & keyof GenerateDataKeyPairRequest & keyof GenerateDataKeyPairRequest & keyof GenerateDataKeyPairRequest & keyof GenerateDataKeyPairRequest]: (GenerateDataKeyPairRequest & GenerateDataKeyPairRequest & GenerateDataKeyPairRequest & GenerateDataKeyPairRequest & GenerateDataKeyPairRequest)[K]
    }>): GenerateDataKeyPairResponse {
        return this.client.generateDataKeyPair(
            this.ops["GenerateDataKeyPair"].apply(partialParams)
        );
    }

    invokeGenerateDataKeyPairWithoutPlaintext(partialParams: ToOptional<{
      [K in keyof GenerateDataKeyPairWithoutPlaintextRequest & keyof GenerateDataKeyPairWithoutPlaintextRequest & keyof GenerateDataKeyPairWithoutPlaintextRequest & keyof GenerateDataKeyPairWithoutPlaintextRequest & keyof GenerateDataKeyPairWithoutPlaintextRequest]: (GenerateDataKeyPairWithoutPlaintextRequest & GenerateDataKeyPairWithoutPlaintextRequest & GenerateDataKeyPairWithoutPlaintextRequest & GenerateDataKeyPairWithoutPlaintextRequest & GenerateDataKeyPairWithoutPlaintextRequest)[K]
    }>): GenerateDataKeyPairWithoutPlaintextResponse {
        return this.client.generateDataKeyPairWithoutPlaintext(
            this.ops["GenerateDataKeyPairWithoutPlaintext"].apply(partialParams)
        );
    }

    invokeGenerateDataKeyWithoutPlaintext(partialParams: ToOptional<{
      [K in keyof GenerateDataKeyWithoutPlaintextRequest & keyof GenerateDataKeyWithoutPlaintextRequest & keyof GenerateDataKeyWithoutPlaintextRequest & keyof GenerateDataKeyWithoutPlaintextRequest & keyof GenerateDataKeyWithoutPlaintextRequest]: (GenerateDataKeyWithoutPlaintextRequest & GenerateDataKeyWithoutPlaintextRequest & GenerateDataKeyWithoutPlaintextRequest & GenerateDataKeyWithoutPlaintextRequest & GenerateDataKeyWithoutPlaintextRequest)[K]
    }>): GenerateDataKeyWithoutPlaintextResponse {
        return this.client.generateDataKeyWithoutPlaintext(
            this.ops["GenerateDataKeyWithoutPlaintext"].apply(partialParams)
        );
    }

    invokeGetKeyPolicy(partialParams: ToOptional<{
      [K in keyof GetKeyPolicyRequest & keyof GetKeyPolicyRequest & keyof GetKeyPolicyRequest & keyof GetKeyPolicyRequest & keyof GetKeyPolicyRequest]: (GetKeyPolicyRequest & GetKeyPolicyRequest & GetKeyPolicyRequest & GetKeyPolicyRequest & GetKeyPolicyRequest)[K]
    }>): GetKeyPolicyResponse {
        return this.client.getKeyPolicy(
            this.ops["GetKeyPolicy"].apply(partialParams)
        );
    }

    invokeGetKeyRotationStatus(partialParams: ToOptional<{
      [K in keyof GetKeyRotationStatusRequest & keyof GetKeyRotationStatusRequest & keyof GetKeyRotationStatusRequest & keyof GetKeyRotationStatusRequest & keyof GetKeyRotationStatusRequest]: (GetKeyRotationStatusRequest & GetKeyRotationStatusRequest & GetKeyRotationStatusRequest & GetKeyRotationStatusRequest & GetKeyRotationStatusRequest)[K]
    }>): GetKeyRotationStatusResponse {
        return this.client.getKeyRotationStatus(
            this.ops["GetKeyRotationStatus"].apply(partialParams)
        );
    }

    invokeGetParametersForImport(partialParams: ToOptional<{
      [K in keyof GetParametersForImportRequest & keyof GetParametersForImportRequest & keyof GetParametersForImportRequest & keyof GetParametersForImportRequest & keyof GetParametersForImportRequest]: (GetParametersForImportRequest & GetParametersForImportRequest & GetParametersForImportRequest & GetParametersForImportRequest & GetParametersForImportRequest)[K]
    }>): GetParametersForImportResponse {
        return this.client.getParametersForImport(
            this.ops["GetParametersForImport"].apply(partialParams)
        );
    }

    invokeGetPublicKey(partialParams: ToOptional<{
      [K in keyof GetPublicKeyRequest & keyof GetPublicKeyRequest & keyof GetPublicKeyRequest & keyof GetPublicKeyRequest & keyof GetPublicKeyRequest]: (GetPublicKeyRequest & GetPublicKeyRequest & GetPublicKeyRequest & GetPublicKeyRequest & GetPublicKeyRequest)[K]
    }>): GetPublicKeyResponse {
        return this.client.getPublicKey(
            this.ops["GetPublicKey"].apply(partialParams)
        );
    }

    invokeImportKeyMaterial(partialParams: ToOptional<{
      [K in keyof ImportKeyMaterialRequest & keyof ImportKeyMaterialRequest & keyof ImportKeyMaterialRequest & keyof ImportKeyMaterialRequest & keyof ImportKeyMaterialRequest]: (ImportKeyMaterialRequest & ImportKeyMaterialRequest & ImportKeyMaterialRequest & ImportKeyMaterialRequest & ImportKeyMaterialRequest)[K]
    }>): ImportKeyMaterialResponse {
        return this.client.importKeyMaterial(
            this.ops["ImportKeyMaterial"].apply(partialParams)
        );
    }

    invokeListGrants(partialParams: ToOptional<{
      [K in keyof ListGrantsRequest & keyof ListGrantsRequest & keyof ListGrantsRequest & keyof ListGrantsRequest & keyof ListGrantsRequest]: (ListGrantsRequest & ListGrantsRequest & ListGrantsRequest & ListGrantsRequest & ListGrantsRequest)[K]
    }>): ListGrantsResponse {
        return this.client.listGrants(
            this.ops["ListGrants"].apply(partialParams)
        );
    }

    invokeListKeyPolicies(partialParams: ToOptional<{
      [K in keyof ListKeyPoliciesRequest & keyof ListKeyPoliciesRequest & keyof ListKeyPoliciesRequest & keyof ListKeyPoliciesRequest & keyof ListKeyPoliciesRequest]: (ListKeyPoliciesRequest & ListKeyPoliciesRequest & ListKeyPoliciesRequest & ListKeyPoliciesRequest & ListKeyPoliciesRequest)[K]
    }>): ListKeyPoliciesResponse {
        return this.client.listKeyPolicies(
            this.ops["ListKeyPolicies"].apply(partialParams)
        );
    }

    invokeListResourceTags(partialParams: ToOptional<{
      [K in keyof ListResourceTagsRequest & keyof ListResourceTagsRequest & keyof ListResourceTagsRequest & keyof ListResourceTagsRequest & keyof ListResourceTagsRequest]: (ListResourceTagsRequest & ListResourceTagsRequest & ListResourceTagsRequest & ListResourceTagsRequest & ListResourceTagsRequest)[K]
    }>): ListResourceTagsResponse {
        return this.client.listResourceTags(
            this.ops["ListResourceTags"].apply(partialParams)
        );
    }

    invokeListRetirableGrants(partialParams: ToOptional<{
      [K in keyof ListRetirableGrantsRequest & keyof ListRetirableGrantsRequest & keyof ListRetirableGrantsRequest & keyof ListRetirableGrantsRequest & keyof ListRetirableGrantsRequest]: (ListRetirableGrantsRequest & ListRetirableGrantsRequest & ListRetirableGrantsRequest & ListRetirableGrantsRequest & ListRetirableGrantsRequest)[K]
    }>): ListGrantsResponse {
        return this.client.listRetirableGrants(
            this.ops["ListRetirableGrants"].apply(partialParams)
        );
    }

    invokePutKeyPolicy(partialParams: ToOptional<{
      [K in keyof PutKeyPolicyRequest & keyof PutKeyPolicyRequest & keyof PutKeyPolicyRequest & keyof PutKeyPolicyRequest & keyof PutKeyPolicyRequest]: (PutKeyPolicyRequest & PutKeyPolicyRequest & PutKeyPolicyRequest & PutKeyPolicyRequest & PutKeyPolicyRequest)[K]
    }>): void {
        return this.client.putKeyPolicy(
            this.ops["PutKeyPolicy"].apply(partialParams)
        );
    }

    invokeReEncrypt(partialParams: ToOptional<{
      [K in keyof ReEncryptRequest & keyof ReEncryptRequest & keyof ReEncryptRequest & keyof ReEncryptRequest & keyof ReEncryptRequest]: (ReEncryptRequest & ReEncryptRequest & ReEncryptRequest & ReEncryptRequest & ReEncryptRequest)[K]
    }>): ReEncryptResponse {
        return this.client.reEncrypt(
            this.ops["ReEncrypt"].apply(partialParams)
        );
    }

    invokeReplicateKey(partialParams: ToOptional<{
      [K in keyof ReplicateKeyRequest & keyof ReplicateKeyRequest & keyof ReplicateKeyRequest & keyof ReplicateKeyRequest & keyof ReplicateKeyRequest]: (ReplicateKeyRequest & ReplicateKeyRequest & ReplicateKeyRequest & ReplicateKeyRequest & ReplicateKeyRequest)[K]
    }>): ReplicateKeyResponse {
        return this.client.replicateKey(
            this.ops["ReplicateKey"].apply(partialParams)
        );
    }

    invokeRevokeGrant(partialParams: ToOptional<{
      [K in keyof RevokeGrantRequest & keyof RevokeGrantRequest & keyof RevokeGrantRequest & keyof RevokeGrantRequest & keyof RevokeGrantRequest]: (RevokeGrantRequest & RevokeGrantRequest & RevokeGrantRequest & RevokeGrantRequest & RevokeGrantRequest)[K]
    }>): void {
        return this.client.revokeGrant(
            this.ops["RevokeGrant"].apply(partialParams)
        );
    }

    invokeScheduleKeyDeletion(partialParams: ToOptional<{
      [K in keyof ScheduleKeyDeletionRequest & keyof ScheduleKeyDeletionRequest & keyof ScheduleKeyDeletionRequest & keyof ScheduleKeyDeletionRequest & keyof ScheduleKeyDeletionRequest]: (ScheduleKeyDeletionRequest & ScheduleKeyDeletionRequest & ScheduleKeyDeletionRequest & ScheduleKeyDeletionRequest & ScheduleKeyDeletionRequest)[K]
    }>): ScheduleKeyDeletionResponse {
        return this.client.scheduleKeyDeletion(
            this.ops["ScheduleKeyDeletion"].apply(partialParams)
        );
    }

    invokeSign(partialParams: ToOptional<{
      [K in keyof SignRequest & keyof SignRequest & keyof SignRequest & keyof SignRequest & keyof SignRequest]: (SignRequest & SignRequest & SignRequest & SignRequest & SignRequest)[K]
    }>): SignResponse {
        return this.client.sign(
            this.ops["Sign"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): void {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): void {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateAlias(partialParams: ToOptional<{
      [K in keyof UpdateAliasRequest & keyof UpdateAliasRequest & keyof UpdateAliasRequest & keyof UpdateAliasRequest & keyof Omit<UpdateAliasRequest, "TargetKeyId">]: (UpdateAliasRequest & UpdateAliasRequest & UpdateAliasRequest & UpdateAliasRequest & Omit<UpdateAliasRequest, "TargetKeyId">)[K]
    }>): void {
        return this.client.updateAlias(
            this.ops["UpdateAlias"].apply(partialParams)
        );
    }

    invokeUpdateCustomKeyStore(partialParams: ToOptional<{
      [K in keyof UpdateCustomKeyStoreRequest & keyof UpdateCustomKeyStoreRequest & keyof UpdateCustomKeyStoreRequest & keyof UpdateCustomKeyStoreRequest & keyof UpdateCustomKeyStoreRequest]: (UpdateCustomKeyStoreRequest & UpdateCustomKeyStoreRequest & UpdateCustomKeyStoreRequest & UpdateCustomKeyStoreRequest & UpdateCustomKeyStoreRequest)[K]
    }>): UpdateCustomKeyStoreResponse {
        return this.client.updateCustomKeyStore(
            this.ops["UpdateCustomKeyStore"].apply(partialParams)
        );
    }

    invokeUpdateKeyDescription(partialParams: ToOptional<{
      [K in keyof UpdateKeyDescriptionRequest & keyof UpdateKeyDescriptionRequest & keyof UpdateKeyDescriptionRequest & keyof UpdateKeyDescriptionRequest & keyof UpdateKeyDescriptionRequest]: (UpdateKeyDescriptionRequest & UpdateKeyDescriptionRequest & UpdateKeyDescriptionRequest & UpdateKeyDescriptionRequest & UpdateKeyDescriptionRequest)[K]
    }>): void {
        return this.client.updateKeyDescription(
            this.ops["UpdateKeyDescription"].apply(partialParams)
        );
    }

    invokeUpdatePrimaryRegion(partialParams: ToOptional<{
      [K in keyof UpdatePrimaryRegionRequest & keyof UpdatePrimaryRegionRequest & keyof UpdatePrimaryRegionRequest & keyof UpdatePrimaryRegionRequest & keyof UpdatePrimaryRegionRequest]: (UpdatePrimaryRegionRequest & UpdatePrimaryRegionRequest & UpdatePrimaryRegionRequest & UpdatePrimaryRegionRequest & UpdatePrimaryRegionRequest)[K]
    }>): void {
        return this.client.updatePrimaryRegion(
            this.ops["UpdatePrimaryRegion"].apply(partialParams)
        );
    }

    invokeVerify(partialParams: ToOptional<{
      [K in keyof VerifyRequest & keyof VerifyRequest & keyof VerifyRequest & keyof VerifyRequest & keyof VerifyRequest]: (VerifyRequest & VerifyRequest & VerifyRequest & VerifyRequest & VerifyRequest)[K]
    }>): VerifyResponse {
        return this.client.verify(
            this.ops["Verify"].apply(partialParams)
        );
    }
}