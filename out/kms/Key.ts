
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

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
const schema = require("../apis/kms-2014-11-01.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.kms.Key {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.kms.Key>) {
        super(...args)
        this.client = new awssdk.KMS()
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]: [string, any]) => {
          try {
            this.capitalizedParams[upperCamelCase(key)] = value;
            return;
          } catch (e) {

          }
          this.capitalizedParams[upperCamelCase(key)] = value;
        })
    }
    boot() {
        Object.entries(this.capitalizedParams).forEach(([key, value]: [string, any]) => {
          try {
            this.capitalizedParams[upperCamelCase(key)] = value.value;
            return;
          } catch (e) {

          }
          this.capitalizedParams[upperCamelCase(key)] = value;
        })
        this.ops = getResourceOperations(this.capitalizedParams as any, schema, this.client)
    }

    invokeCancelKeyDeletion(partialParams: ToOptional<{
      [K in keyof CancelKeyDeletionRequest & keyof CancelKeyDeletionRequest & keyof CancelKeyDeletionRequest & keyof CancelKeyDeletionRequest & keyof CancelKeyDeletionRequest & keyof CancelKeyDeletionRequest]: (CancelKeyDeletionRequest & CancelKeyDeletionRequest & CancelKeyDeletionRequest & CancelKeyDeletionRequest & CancelKeyDeletionRequest & CancelKeyDeletionRequest)[K]
    }>): Request<CancelKeyDeletionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelKeyDeletion(
          this.ops["CancelKeyDeletion"].applicator.apply(partialParams)
        );
    }

    invokeConnectCustomKeyStore(partialParams: ToOptional<{
      [K in keyof ConnectCustomKeyStoreRequest & keyof ConnectCustomKeyStoreRequest & keyof ConnectCustomKeyStoreRequest & keyof ConnectCustomKeyStoreRequest & keyof ConnectCustomKeyStoreRequest & keyof ConnectCustomKeyStoreRequest]: (ConnectCustomKeyStoreRequest & ConnectCustomKeyStoreRequest & ConnectCustomKeyStoreRequest & ConnectCustomKeyStoreRequest & ConnectCustomKeyStoreRequest & ConnectCustomKeyStoreRequest)[K]
    }>): Request<ConnectCustomKeyStoreResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.connectCustomKeyStore(
          this.ops["ConnectCustomKeyStore"].applicator.apply(partialParams)
        );
    }

    invokeCreateAlias(partialParams: ToOptional<{
      [K in keyof CreateAliasRequest & keyof CreateAliasRequest & keyof CreateAliasRequest & keyof CreateAliasRequest & keyof CreateAliasRequest & keyof CreateAliasRequest]: (CreateAliasRequest & CreateAliasRequest & CreateAliasRequest & CreateAliasRequest & CreateAliasRequest & CreateAliasRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAlias(
          this.ops["CreateAlias"].applicator.apply(partialParams)
        );
    }

    invokeCreateCustomKeyStore(partialParams: ToOptional<{
      [K in keyof CreateCustomKeyStoreRequest & keyof CreateCustomKeyStoreRequest & keyof CreateCustomKeyStoreRequest & keyof CreateCustomKeyStoreRequest & keyof CreateCustomKeyStoreRequest & keyof CreateCustomKeyStoreRequest]: (CreateCustomKeyStoreRequest & CreateCustomKeyStoreRequest & CreateCustomKeyStoreRequest & CreateCustomKeyStoreRequest & CreateCustomKeyStoreRequest & CreateCustomKeyStoreRequest)[K]
    }>): Request<CreateCustomKeyStoreResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createCustomKeyStore(
          this.ops["CreateCustomKeyStore"].applicator.apply(partialParams)
        );
    }

    invokeCreateGrant(partialParams: ToOptional<{
      [K in keyof CreateGrantRequest & keyof CreateGrantRequest & keyof CreateGrantRequest & keyof CreateGrantRequest & keyof CreateGrantRequest & keyof CreateGrantRequest]: (CreateGrantRequest & CreateGrantRequest & CreateGrantRequest & CreateGrantRequest & CreateGrantRequest & CreateGrantRequest)[K]
    }>): Request<CreateGrantResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createGrant(
          this.ops["CreateGrant"].applicator.apply(partialParams)
        );
    }

    invokeDecrypt(partialParams: ToOptional<{
      [K in keyof DecryptRequest & keyof DecryptRequest & keyof DecryptRequest & keyof DecryptRequest & keyof DecryptRequest & keyof DecryptRequest]: (DecryptRequest & DecryptRequest & DecryptRequest & DecryptRequest & DecryptRequest & DecryptRequest)[K]
    }>): Request<DecryptResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.decrypt(
          this.ops["Decrypt"].applicator.apply(partialParams)
        );
    }

    invokeDeleteAlias(partialParams: ToOptional<{
      [K in keyof DeleteAliasRequest & keyof DeleteAliasRequest & keyof DeleteAliasRequest & keyof DeleteAliasRequest & keyof DeleteAliasRequest & keyof DeleteAliasRequest]: (DeleteAliasRequest & DeleteAliasRequest & DeleteAliasRequest & DeleteAliasRequest & DeleteAliasRequest & DeleteAliasRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAlias(
          this.ops["DeleteAlias"].applicator.apply(partialParams)
        );
    }

    invokeDeleteCustomKeyStore(partialParams: ToOptional<{
      [K in keyof DeleteCustomKeyStoreRequest & keyof DeleteCustomKeyStoreRequest & keyof DeleteCustomKeyStoreRequest & keyof DeleteCustomKeyStoreRequest & keyof DeleteCustomKeyStoreRequest & keyof DeleteCustomKeyStoreRequest]: (DeleteCustomKeyStoreRequest & DeleteCustomKeyStoreRequest & DeleteCustomKeyStoreRequest & DeleteCustomKeyStoreRequest & DeleteCustomKeyStoreRequest & DeleteCustomKeyStoreRequest)[K]
    }>): Request<DeleteCustomKeyStoreResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteCustomKeyStore(
          this.ops["DeleteCustomKeyStore"].applicator.apply(partialParams)
        );
    }

    invokeDeleteImportedKeyMaterial(partialParams: ToOptional<{
      [K in keyof DeleteImportedKeyMaterialRequest & keyof DeleteImportedKeyMaterialRequest & keyof DeleteImportedKeyMaterialRequest & keyof DeleteImportedKeyMaterialRequest & keyof DeleteImportedKeyMaterialRequest & keyof DeleteImportedKeyMaterialRequest]: (DeleteImportedKeyMaterialRequest & DeleteImportedKeyMaterialRequest & DeleteImportedKeyMaterialRequest & DeleteImportedKeyMaterialRequest & DeleteImportedKeyMaterialRequest & DeleteImportedKeyMaterialRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteImportedKeyMaterial(
          this.ops["DeleteImportedKeyMaterial"].applicator.apply(partialParams)
        );
    }

    invokeDescribeKey(partialParams: ToOptional<{
      [K in keyof DescribeKeyRequest & keyof DescribeKeyRequest & keyof DescribeKeyRequest & keyof DescribeKeyRequest & keyof DescribeKeyRequest & keyof DescribeKeyRequest]: (DescribeKeyRequest & DescribeKeyRequest & DescribeKeyRequest & DescribeKeyRequest & DescribeKeyRequest & DescribeKeyRequest)[K]
    }>): Request<DescribeKeyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeKey(
          this.ops["DescribeKey"].applicator.apply(partialParams)
        );
    }

    invokeDisableKey(partialParams: ToOptional<{
      [K in keyof DisableKeyRequest & keyof DisableKeyRequest & keyof DisableKeyRequest & keyof DisableKeyRequest & keyof DisableKeyRequest & keyof DisableKeyRequest]: (DisableKeyRequest & DisableKeyRequest & DisableKeyRequest & DisableKeyRequest & DisableKeyRequest & DisableKeyRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disableKey(
          this.ops["DisableKey"].applicator.apply(partialParams)
        );
    }

    invokeDisableKeyRotation(partialParams: ToOptional<{
      [K in keyof DisableKeyRotationRequest & keyof DisableKeyRotationRequest & keyof DisableKeyRotationRequest & keyof DisableKeyRotationRequest & keyof DisableKeyRotationRequest & keyof DisableKeyRotationRequest]: (DisableKeyRotationRequest & DisableKeyRotationRequest & DisableKeyRotationRequest & DisableKeyRotationRequest & DisableKeyRotationRequest & DisableKeyRotationRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disableKeyRotation(
          this.ops["DisableKeyRotation"].applicator.apply(partialParams)
        );
    }

    invokeDisconnectCustomKeyStore(partialParams: ToOptional<{
      [K in keyof DisconnectCustomKeyStoreRequest & keyof DisconnectCustomKeyStoreRequest & keyof DisconnectCustomKeyStoreRequest & keyof DisconnectCustomKeyStoreRequest & keyof DisconnectCustomKeyStoreRequest & keyof DisconnectCustomKeyStoreRequest]: (DisconnectCustomKeyStoreRequest & DisconnectCustomKeyStoreRequest & DisconnectCustomKeyStoreRequest & DisconnectCustomKeyStoreRequest & DisconnectCustomKeyStoreRequest & DisconnectCustomKeyStoreRequest)[K]
    }>): Request<DisconnectCustomKeyStoreResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disconnectCustomKeyStore(
          this.ops["DisconnectCustomKeyStore"].applicator.apply(partialParams)
        );
    }

    invokeEnableKey(partialParams: ToOptional<{
      [K in keyof EnableKeyRequest & keyof EnableKeyRequest & keyof EnableKeyRequest & keyof EnableKeyRequest & keyof EnableKeyRequest & keyof EnableKeyRequest]: (EnableKeyRequest & EnableKeyRequest & EnableKeyRequest & EnableKeyRequest & EnableKeyRequest & EnableKeyRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.enableKey(
          this.ops["EnableKey"].applicator.apply(partialParams)
        );
    }

    invokeEnableKeyRotation(partialParams: ToOptional<{
      [K in keyof EnableKeyRotationRequest & keyof EnableKeyRotationRequest & keyof EnableKeyRotationRequest & keyof EnableKeyRotationRequest & keyof EnableKeyRotationRequest & keyof EnableKeyRotationRequest]: (EnableKeyRotationRequest & EnableKeyRotationRequest & EnableKeyRotationRequest & EnableKeyRotationRequest & EnableKeyRotationRequest & EnableKeyRotationRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.enableKeyRotation(
          this.ops["EnableKeyRotation"].applicator.apply(partialParams)
        );
    }

    invokeEncrypt(partialParams: ToOptional<{
      [K in keyof EncryptRequest & keyof EncryptRequest & keyof EncryptRequest & keyof EncryptRequest & keyof EncryptRequest & keyof EncryptRequest]: (EncryptRequest & EncryptRequest & EncryptRequest & EncryptRequest & EncryptRequest & EncryptRequest)[K]
    }>): Request<EncryptResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.encrypt(
          this.ops["Encrypt"].applicator.apply(partialParams)
        );
    }

    invokeGenerateDataKey(partialParams: ToOptional<{
      [K in keyof GenerateDataKeyRequest & keyof GenerateDataKeyRequest & keyof GenerateDataKeyRequest & keyof GenerateDataKeyRequest & keyof GenerateDataKeyRequest & keyof GenerateDataKeyRequest]: (GenerateDataKeyRequest & GenerateDataKeyRequest & GenerateDataKeyRequest & GenerateDataKeyRequest & GenerateDataKeyRequest & GenerateDataKeyRequest)[K]
    }>): Request<GenerateDataKeyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.generateDataKey(
          this.ops["GenerateDataKey"].applicator.apply(partialParams)
        );
    }

    invokeGenerateDataKeyPair(partialParams: ToOptional<{
      [K in keyof GenerateDataKeyPairRequest & keyof GenerateDataKeyPairRequest & keyof GenerateDataKeyPairRequest & keyof GenerateDataKeyPairRequest & keyof GenerateDataKeyPairRequest & keyof GenerateDataKeyPairRequest]: (GenerateDataKeyPairRequest & GenerateDataKeyPairRequest & GenerateDataKeyPairRequest & GenerateDataKeyPairRequest & GenerateDataKeyPairRequest & GenerateDataKeyPairRequest)[K]
    }>): Request<GenerateDataKeyPairResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.generateDataKeyPair(
          this.ops["GenerateDataKeyPair"].applicator.apply(partialParams)
        );
    }

    invokeGenerateDataKeyPairWithoutPlaintext(partialParams: ToOptional<{
      [K in keyof GenerateDataKeyPairWithoutPlaintextRequest & keyof GenerateDataKeyPairWithoutPlaintextRequest & keyof GenerateDataKeyPairWithoutPlaintextRequest & keyof GenerateDataKeyPairWithoutPlaintextRequest & keyof GenerateDataKeyPairWithoutPlaintextRequest & keyof GenerateDataKeyPairWithoutPlaintextRequest]: (GenerateDataKeyPairWithoutPlaintextRequest & GenerateDataKeyPairWithoutPlaintextRequest & GenerateDataKeyPairWithoutPlaintextRequest & GenerateDataKeyPairWithoutPlaintextRequest & GenerateDataKeyPairWithoutPlaintextRequest & GenerateDataKeyPairWithoutPlaintextRequest)[K]
    }>): Request<GenerateDataKeyPairWithoutPlaintextResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.generateDataKeyPairWithoutPlaintext(
          this.ops["GenerateDataKeyPairWithoutPlaintext"].applicator.apply(partialParams)
        );
    }

    invokeGenerateDataKeyWithoutPlaintext(partialParams: ToOptional<{
      [K in keyof GenerateDataKeyWithoutPlaintextRequest & keyof GenerateDataKeyWithoutPlaintextRequest & keyof GenerateDataKeyWithoutPlaintextRequest & keyof GenerateDataKeyWithoutPlaintextRequest & keyof GenerateDataKeyWithoutPlaintextRequest & keyof GenerateDataKeyWithoutPlaintextRequest]: (GenerateDataKeyWithoutPlaintextRequest & GenerateDataKeyWithoutPlaintextRequest & GenerateDataKeyWithoutPlaintextRequest & GenerateDataKeyWithoutPlaintextRequest & GenerateDataKeyWithoutPlaintextRequest & GenerateDataKeyWithoutPlaintextRequest)[K]
    }>): Request<GenerateDataKeyWithoutPlaintextResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.generateDataKeyWithoutPlaintext(
          this.ops["GenerateDataKeyWithoutPlaintext"].applicator.apply(partialParams)
        );
    }

    invokeGetKeyPolicy(partialParams: ToOptional<{
      [K in keyof GetKeyPolicyRequest & keyof GetKeyPolicyRequest & keyof GetKeyPolicyRequest & keyof GetKeyPolicyRequest & keyof GetKeyPolicyRequest & keyof GetKeyPolicyRequest]: (GetKeyPolicyRequest & GetKeyPolicyRequest & GetKeyPolicyRequest & GetKeyPolicyRequest & GetKeyPolicyRequest & GetKeyPolicyRequest)[K]
    }>): Request<GetKeyPolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getKeyPolicy(
          this.ops["GetKeyPolicy"].applicator.apply(partialParams)
        );
    }

    invokeGetKeyRotationStatus(partialParams: ToOptional<{
      [K in keyof GetKeyRotationStatusRequest & keyof GetKeyRotationStatusRequest & keyof GetKeyRotationStatusRequest & keyof GetKeyRotationStatusRequest & keyof GetKeyRotationStatusRequest & keyof GetKeyRotationStatusRequest]: (GetKeyRotationStatusRequest & GetKeyRotationStatusRequest & GetKeyRotationStatusRequest & GetKeyRotationStatusRequest & GetKeyRotationStatusRequest & GetKeyRotationStatusRequest)[K]
    }>): Request<GetKeyRotationStatusResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getKeyRotationStatus(
          this.ops["GetKeyRotationStatus"].applicator.apply(partialParams)
        );
    }

    invokeGetParametersForImport(partialParams: ToOptional<{
      [K in keyof GetParametersForImportRequest & keyof GetParametersForImportRequest & keyof GetParametersForImportRequest & keyof GetParametersForImportRequest & keyof GetParametersForImportRequest & keyof GetParametersForImportRequest]: (GetParametersForImportRequest & GetParametersForImportRequest & GetParametersForImportRequest & GetParametersForImportRequest & GetParametersForImportRequest & GetParametersForImportRequest)[K]
    }>): Request<GetParametersForImportResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getParametersForImport(
          this.ops["GetParametersForImport"].applicator.apply(partialParams)
        );
    }

    invokeGetPublicKey(partialParams: ToOptional<{
      [K in keyof GetPublicKeyRequest & keyof GetPublicKeyRequest & keyof GetPublicKeyRequest & keyof GetPublicKeyRequest & keyof GetPublicKeyRequest & keyof GetPublicKeyRequest]: (GetPublicKeyRequest & GetPublicKeyRequest & GetPublicKeyRequest & GetPublicKeyRequest & GetPublicKeyRequest & GetPublicKeyRequest)[K]
    }>): Request<GetPublicKeyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPublicKey(
          this.ops["GetPublicKey"].applicator.apply(partialParams)
        );
    }

    invokeImportKeyMaterial(partialParams: ToOptional<{
      [K in keyof ImportKeyMaterialRequest & keyof ImportKeyMaterialRequest & keyof ImportKeyMaterialRequest & keyof ImportKeyMaterialRequest & keyof ImportKeyMaterialRequest & keyof ImportKeyMaterialRequest]: (ImportKeyMaterialRequest & ImportKeyMaterialRequest & ImportKeyMaterialRequest & ImportKeyMaterialRequest & ImportKeyMaterialRequest & ImportKeyMaterialRequest)[K]
    }>): Request<ImportKeyMaterialResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.importKeyMaterial(
          this.ops["ImportKeyMaterial"].applicator.apply(partialParams)
        );
    }

    invokeListGrants(partialParams: ToOptional<{
      [K in keyof ListGrantsRequest & keyof ListGrantsRequest & keyof ListGrantsRequest & keyof Omit<ListGrantsRequest, "KeyId"> & keyof ListGrantsRequest & keyof ListGrantsRequest]: (ListGrantsRequest & ListGrantsRequest & ListGrantsRequest & Omit<ListGrantsRequest, "KeyId"> & ListGrantsRequest & ListGrantsRequest)[K]
    }>): Request<ListGrantsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listGrants(
          this.ops["ListGrants"].applicator.apply(partialParams)
        );
    }

    invokeListKeyPolicies(partialParams: ToOptional<{
      [K in keyof ListKeyPoliciesRequest & keyof ListKeyPoliciesRequest & keyof ListKeyPoliciesRequest & keyof Omit<ListKeyPoliciesRequest, "KeyId"> & keyof ListKeyPoliciesRequest & keyof ListKeyPoliciesRequest]: (ListKeyPoliciesRequest & ListKeyPoliciesRequest & ListKeyPoliciesRequest & Omit<ListKeyPoliciesRequest, "KeyId"> & ListKeyPoliciesRequest & ListKeyPoliciesRequest)[K]
    }>): Request<ListKeyPoliciesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listKeyPolicies(
          this.ops["ListKeyPolicies"].applicator.apply(partialParams)
        );
    }

    invokeListResourceTags(partialParams: ToOptional<{
      [K in keyof ListResourceTagsRequest & keyof ListResourceTagsRequest & keyof ListResourceTagsRequest & keyof Omit<ListResourceTagsRequest, "KeyId"> & keyof ListResourceTagsRequest & keyof ListResourceTagsRequest]: (ListResourceTagsRequest & ListResourceTagsRequest & ListResourceTagsRequest & Omit<ListResourceTagsRequest, "KeyId"> & ListResourceTagsRequest & ListResourceTagsRequest)[K]
    }>): Request<ListResourceTagsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listResourceTags(
          this.ops["ListResourceTags"].applicator.apply(partialParams)
        );
    }

    invokeListRetirableGrants(partialParams: ToOptional<{
      [K in keyof ListRetirableGrantsRequest & keyof ListRetirableGrantsRequest & keyof ListRetirableGrantsRequest & keyof ListRetirableGrantsRequest & keyof ListRetirableGrantsRequest & keyof ListRetirableGrantsRequest]: (ListRetirableGrantsRequest & ListRetirableGrantsRequest & ListRetirableGrantsRequest & ListRetirableGrantsRequest & ListRetirableGrantsRequest & ListRetirableGrantsRequest)[K]
    }>): Request<ListGrantsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listRetirableGrants(
          this.ops["ListRetirableGrants"].applicator.apply(partialParams)
        );
    }

    invokePutKeyPolicy(partialParams: ToOptional<{
      [K in keyof PutKeyPolicyRequest & keyof PutKeyPolicyRequest & keyof PutKeyPolicyRequest & keyof Omit<PutKeyPolicyRequest, "KeyId"> & keyof PutKeyPolicyRequest & keyof Omit<PutKeyPolicyRequest, "Policy">]: (PutKeyPolicyRequest & PutKeyPolicyRequest & PutKeyPolicyRequest & Omit<PutKeyPolicyRequest, "KeyId"> & PutKeyPolicyRequest & Omit<PutKeyPolicyRequest, "Policy">)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putKeyPolicy(
          this.ops["PutKeyPolicy"].applicator.apply(partialParams)
        );
    }

    invokeReEncrypt(partialParams: ToOptional<{
      [K in keyof ReEncryptRequest & keyof ReEncryptRequest & keyof ReEncryptRequest & keyof ReEncryptRequest & keyof ReEncryptRequest & keyof ReEncryptRequest]: (ReEncryptRequest & ReEncryptRequest & ReEncryptRequest & ReEncryptRequest & ReEncryptRequest & ReEncryptRequest)[K]
    }>): Request<ReEncryptResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.reEncrypt(
          this.ops["ReEncrypt"].applicator.apply(partialParams)
        );
    }

    invokeReplicateKey(partialParams: ToOptional<{
      [K in keyof ReplicateKeyRequest & keyof ReplicateKeyRequest & keyof ReplicateKeyRequest & keyof Omit<ReplicateKeyRequest, "KeyId"> & keyof ReplicateKeyRequest & keyof ReplicateKeyRequest]: (ReplicateKeyRequest & ReplicateKeyRequest & ReplicateKeyRequest & Omit<ReplicateKeyRequest, "KeyId"> & ReplicateKeyRequest & ReplicateKeyRequest)[K]
    }>): Request<ReplicateKeyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.replicateKey(
          this.ops["ReplicateKey"].applicator.apply(partialParams)
        );
    }

    invokeRevokeGrant(partialParams: ToOptional<{
      [K in keyof RevokeGrantRequest & keyof RevokeGrantRequest & keyof RevokeGrantRequest & keyof Omit<RevokeGrantRequest, "KeyId"> & keyof RevokeGrantRequest & keyof RevokeGrantRequest]: (RevokeGrantRequest & RevokeGrantRequest & RevokeGrantRequest & Omit<RevokeGrantRequest, "KeyId"> & RevokeGrantRequest & RevokeGrantRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.revokeGrant(
          this.ops["RevokeGrant"].applicator.apply(partialParams)
        );
    }

    invokeScheduleKeyDeletion(partialParams: ToOptional<{
      [K in keyof ScheduleKeyDeletionRequest & keyof ScheduleKeyDeletionRequest & keyof ScheduleKeyDeletionRequest & keyof Omit<ScheduleKeyDeletionRequest, "KeyId"> & keyof ScheduleKeyDeletionRequest & keyof ScheduleKeyDeletionRequest]: (ScheduleKeyDeletionRequest & ScheduleKeyDeletionRequest & ScheduleKeyDeletionRequest & Omit<ScheduleKeyDeletionRequest, "KeyId"> & ScheduleKeyDeletionRequest & ScheduleKeyDeletionRequest)[K]
    }>): Request<ScheduleKeyDeletionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.scheduleKeyDeletion(
          this.ops["ScheduleKeyDeletion"].applicator.apply(partialParams)
        );
    }

    invokeSign(partialParams: ToOptional<{
      [K in keyof SignRequest & keyof SignRequest & keyof SignRequest & keyof Omit<SignRequest, "KeyId"> & keyof SignRequest & keyof SignRequest]: (SignRequest & SignRequest & SignRequest & Omit<SignRequest, "KeyId"> & SignRequest & SignRequest)[K]
    }>): Request<SignResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.sign(
          this.ops["Sign"].applicator.apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof Omit<TagResourceRequest, "KeyId"> & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & Omit<TagResourceRequest, "KeyId"> & TagResourceRequest & TagResourceRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].applicator.apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof Omit<UntagResourceRequest, "KeyId"> & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & Omit<UntagResourceRequest, "KeyId"> & UntagResourceRequest & UntagResourceRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].applicator.apply(partialParams)
        );
    }

    invokeUpdateAlias(partialParams: ToOptional<{
      [K in keyof UpdateAliasRequest & keyof UpdateAliasRequest & keyof UpdateAliasRequest & keyof UpdateAliasRequest & keyof UpdateAliasRequest & keyof UpdateAliasRequest]: (UpdateAliasRequest & UpdateAliasRequest & UpdateAliasRequest & UpdateAliasRequest & UpdateAliasRequest & UpdateAliasRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateAlias(
          this.ops["UpdateAlias"].applicator.apply(partialParams)
        );
    }

    invokeUpdateCustomKeyStore(partialParams: ToOptional<{
      [K in keyof UpdateCustomKeyStoreRequest & keyof UpdateCustomKeyStoreRequest & keyof UpdateCustomKeyStoreRequest & keyof UpdateCustomKeyStoreRequest & keyof UpdateCustomKeyStoreRequest & keyof UpdateCustomKeyStoreRequest]: (UpdateCustomKeyStoreRequest & UpdateCustomKeyStoreRequest & UpdateCustomKeyStoreRequest & UpdateCustomKeyStoreRequest & UpdateCustomKeyStoreRequest & UpdateCustomKeyStoreRequest)[K]
    }>): Request<UpdateCustomKeyStoreResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateCustomKeyStore(
          this.ops["UpdateCustomKeyStore"].applicator.apply(partialParams)
        );
    }

    invokeUpdateKeyDescription(partialParams: ToOptional<{
      [K in keyof UpdateKeyDescriptionRequest & keyof UpdateKeyDescriptionRequest & keyof Omit<UpdateKeyDescriptionRequest, "Description"> & keyof Omit<UpdateKeyDescriptionRequest, "KeyId"> & keyof UpdateKeyDescriptionRequest & keyof UpdateKeyDescriptionRequest]: (UpdateKeyDescriptionRequest & UpdateKeyDescriptionRequest & Omit<UpdateKeyDescriptionRequest, "Description"> & Omit<UpdateKeyDescriptionRequest, "KeyId"> & UpdateKeyDescriptionRequest & UpdateKeyDescriptionRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateKeyDescription(
          this.ops["UpdateKeyDescription"].applicator.apply(partialParams)
        );
    }

    invokeUpdatePrimaryRegion(partialParams: ToOptional<{
      [K in keyof UpdatePrimaryRegionRequest & keyof UpdatePrimaryRegionRequest & keyof UpdatePrimaryRegionRequest & keyof Omit<UpdatePrimaryRegionRequest, "KeyId"> & keyof UpdatePrimaryRegionRequest & keyof UpdatePrimaryRegionRequest]: (UpdatePrimaryRegionRequest & UpdatePrimaryRegionRequest & UpdatePrimaryRegionRequest & Omit<UpdatePrimaryRegionRequest, "KeyId"> & UpdatePrimaryRegionRequest & UpdatePrimaryRegionRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updatePrimaryRegion(
          this.ops["UpdatePrimaryRegion"].applicator.apply(partialParams)
        );
    }

    invokeVerify(partialParams: ToOptional<{
      [K in keyof VerifyRequest & keyof VerifyRequest & keyof VerifyRequest & keyof Omit<VerifyRequest, "KeyId"> & keyof VerifyRequest & keyof VerifyRequest]: (VerifyRequest & VerifyRequest & VerifyRequest & Omit<VerifyRequest, "KeyId"> & VerifyRequest & VerifyRequest)[K]
    }>): Request<VerifyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.verify(
          this.ops["Verify"].applicator.apply(partialParams)
        );
    }
}