
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CancelKeyDeletionRequest,
    ConnectCustomKeyStoreRequest,
    CreateCustomKeyStoreRequest,
    CreateGrantRequest,
    CreateKeyRequest,
    DecryptRequest,
    DeleteCustomKeyStoreRequest,
    DescribeCustomKeyStoresRequest,
    DescribeKeyRequest,
    DisconnectCustomKeyStoreRequest,
    EncryptRequest,
    GenerateDataKeyRequest,
    GenerateDataKeyPairRequest,
    GenerateDataKeyPairWithoutPlaintextRequest,
    GenerateDataKeyWithoutPlaintextRequest,
    GenerateRandomRequest,
    GetKeyPolicyRequest,
    GetKeyRotationStatusRequest,
    GetParametersForImportRequest,
    GetPublicKeyRequest,
    ImportKeyMaterialRequest,
    ListAliasesRequest,
    ListGrantsRequest,
    ListKeyPoliciesRequest,
    ListKeysRequest,
    ListResourceTagsRequest,
    ListRetirableGrantsRequest,
    ReEncryptRequest,
    ReplicateKeyRequest,
    ScheduleKeyDeletionRequest,
    SignRequest,
    UpdateCustomKeyStoreRequest,
    VerifyRequest,
    CancelKeyDeletionResponse,
    ConnectCustomKeyStoreResponse,
    CreateCustomKeyStoreResponse,
    CreateGrantResponse,
    CreateKeyResponse,
    DecryptResponse,
    DeleteCustomKeyStoreResponse,
    DescribeCustomKeyStoresResponse,
    DescribeKeyResponse,
    DisconnectCustomKeyStoreResponse,
    EncryptResponse,
    GenerateDataKeyResponse,
    GenerateDataKeyPairResponse,
    GenerateDataKeyPairWithoutPlaintextResponse,
    GenerateDataKeyWithoutPlaintextResponse,
    GenerateRandomResponse,
    GetKeyPolicyResponse,
    GetKeyRotationStatusResponse,
    GetParametersForImportResponse,
    GetPublicKeyResponse,
    ImportKeyMaterialResponse,
    ListAliasesResponse,
    ListGrantsResponse,
    ListKeyPoliciesResponse,
    ListKeysResponse,
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

export default class extends aws.kms.ReplicaExternalKey {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.kms.ReplicaExternalKey>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.KMS()
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]: [string, any]) => {
          this.capitalizedParams[upperCamelCase(key)] = value;
          if ((this as any)[upperCamelCase(this.constructor.name)+upperCamelCase(key)] === undefined) {
              this.capitalizedParams[this.constructor.name+upperCamelCase(key)] = value;
          }
          console.log(this.capitalizedParams);
        })
    }
    boot() {
        if (this.booted) {
          return;
        }
        Object.entries(this.capitalizedParams).forEach(([key, value]: [string, any]) => {
          try {
            this.capitalizedParams[upperCamelCase(key)] = value.value;
            return;
          } catch (e) {

          }
          this.capitalizedParams[upperCamelCase(key)] = value;
        })
        this.ops = getResourceOperations(this.capitalizedParams as any, schema);
        this.booted = true;
    }

    invokeCancelKeyDeletion(partialParams: ToOptional<{
      [K in keyof CancelKeyDeletionRequest & keyof Omit<CancelKeyDeletionRequest, "KeyId">]: (CancelKeyDeletionRequest)[K]
    }>): Request<CancelKeyDeletionResponse, AWSError> {
        this.boot();
        return this.client.cancelKeyDeletion(
          this.ops["CancelKeyDeletion"].apply(partialParams)
        );
    }

    invokeConnectCustomKeyStore(partialParams: ToOptional<{
      [K in keyof ConnectCustomKeyStoreRequest]: (ConnectCustomKeyStoreRequest)[K]
    }>): Request<ConnectCustomKeyStoreResponse, AWSError> {
        this.boot();
        return this.client.connectCustomKeyStore(
          this.ops["ConnectCustomKeyStore"].apply(partialParams)
        );
    }

    invokeCreateCustomKeyStore(partialParams: ToOptional<{
      [K in keyof CreateCustomKeyStoreRequest]: (CreateCustomKeyStoreRequest)[K]
    }>): Request<CreateCustomKeyStoreResponse, AWSError> {
        this.boot();
        return this.client.createCustomKeyStore(
          this.ops["CreateCustomKeyStore"].apply(partialParams)
        );
    }

    invokeCreateGrant(partialParams: ToOptional<{
      [K in keyof CreateGrantRequest & keyof Omit<CreateGrantRequest, "KeyId">]: (CreateGrantRequest)[K]
    }>): Request<CreateGrantResponse, AWSError> {
        this.boot();
        return this.client.createGrant(
          this.ops["CreateGrant"].apply(partialParams)
        );
    }

    invokeCreateKey(partialParams: ToOptional<{
      [K in keyof CreateKeyRequest]: (CreateKeyRequest)[K]
    }>): Request<CreateKeyResponse, AWSError> {
        this.boot();
        return this.client.createKey(
          this.ops["CreateKey"].apply(partialParams)
        );
    }

    invokeDecrypt(partialParams: ToOptional<{
      [K in keyof DecryptRequest]: (DecryptRequest)[K]
    }>): Request<DecryptResponse, AWSError> {
        this.boot();
        return this.client.decrypt(
          this.ops["Decrypt"].apply(partialParams)
        );
    }

    invokeDeleteCustomKeyStore(partialParams: ToOptional<{
      [K in keyof DeleteCustomKeyStoreRequest]: (DeleteCustomKeyStoreRequest)[K]
    }>): Request<DeleteCustomKeyStoreResponse, AWSError> {
        this.boot();
        return this.client.deleteCustomKeyStore(
          this.ops["DeleteCustomKeyStore"].apply(partialParams)
        );
    }

    invokeDescribeCustomKeyStores(partialParams: ToOptional<{
      [K in keyof DescribeCustomKeyStoresRequest]: (DescribeCustomKeyStoresRequest)[K]
    }>): Request<DescribeCustomKeyStoresResponse, AWSError> {
        this.boot();
        return this.client.describeCustomKeyStores(
          this.ops["DescribeCustomKeyStores"].apply(partialParams)
        );
    }

    invokeDescribeKey(partialParams: ToOptional<{
      [K in keyof DescribeKeyRequest & keyof Omit<DescribeKeyRequest, "KeyId">]: (DescribeKeyRequest)[K]
    }>): Request<DescribeKeyResponse, AWSError> {
        this.boot();
        return this.client.describeKey(
          this.ops["DescribeKey"].apply(partialParams)
        );
    }

    invokeDisconnectCustomKeyStore(partialParams: ToOptional<{
      [K in keyof DisconnectCustomKeyStoreRequest]: (DisconnectCustomKeyStoreRequest)[K]
    }>): Request<DisconnectCustomKeyStoreResponse, AWSError> {
        this.boot();
        return this.client.disconnectCustomKeyStore(
          this.ops["DisconnectCustomKeyStore"].apply(partialParams)
        );
    }

    invokeEncrypt(partialParams: ToOptional<{
      [K in keyof EncryptRequest & keyof Omit<EncryptRequest, "KeyId">]: (EncryptRequest)[K]
    }>): Request<EncryptResponse, AWSError> {
        this.boot();
        return this.client.encrypt(
          this.ops["Encrypt"].apply(partialParams)
        );
    }

    invokeGenerateDataKey(partialParams: ToOptional<{
      [K in keyof GenerateDataKeyRequest & keyof Omit<GenerateDataKeyRequest, "KeyId">]: (GenerateDataKeyRequest)[K]
    }>): Request<GenerateDataKeyResponse, AWSError> {
        this.boot();
        return this.client.generateDataKey(
          this.ops["GenerateDataKey"].apply(partialParams)
        );
    }

    invokeGenerateDataKeyPair(partialParams: ToOptional<{
      [K in keyof GenerateDataKeyPairRequest & keyof Omit<GenerateDataKeyPairRequest, "KeyId">]: (GenerateDataKeyPairRequest)[K]
    }>): Request<GenerateDataKeyPairResponse, AWSError> {
        this.boot();
        return this.client.generateDataKeyPair(
          this.ops["GenerateDataKeyPair"].apply(partialParams)
        );
    }

    invokeGenerateDataKeyPairWithoutPlaintext(partialParams: ToOptional<{
      [K in keyof GenerateDataKeyPairWithoutPlaintextRequest & keyof Omit<GenerateDataKeyPairWithoutPlaintextRequest, "KeyId">]: (GenerateDataKeyPairWithoutPlaintextRequest)[K]
    }>): Request<GenerateDataKeyPairWithoutPlaintextResponse, AWSError> {
        this.boot();
        return this.client.generateDataKeyPairWithoutPlaintext(
          this.ops["GenerateDataKeyPairWithoutPlaintext"].apply(partialParams)
        );
    }

    invokeGenerateDataKeyWithoutPlaintext(partialParams: ToOptional<{
      [K in keyof GenerateDataKeyWithoutPlaintextRequest & keyof Omit<GenerateDataKeyWithoutPlaintextRequest, "KeyId">]: (GenerateDataKeyWithoutPlaintextRequest)[K]
    }>): Request<GenerateDataKeyWithoutPlaintextResponse, AWSError> {
        this.boot();
        return this.client.generateDataKeyWithoutPlaintext(
          this.ops["GenerateDataKeyWithoutPlaintext"].apply(partialParams)
        );
    }

    invokeGenerateRandom(partialParams: ToOptional<{
      [K in keyof GenerateRandomRequest]: (GenerateRandomRequest)[K]
    }>): Request<GenerateRandomResponse, AWSError> {
        this.boot();
        return this.client.generateRandom(
          this.ops["GenerateRandom"].apply(partialParams)
        );
    }

    invokeGetKeyPolicy(partialParams: ToOptional<{
      [K in keyof GetKeyPolicyRequest & keyof Omit<GetKeyPolicyRequest, "KeyId">]: (GetKeyPolicyRequest)[K]
    }>): Request<GetKeyPolicyResponse, AWSError> {
        this.boot();
        return this.client.getKeyPolicy(
          this.ops["GetKeyPolicy"].apply(partialParams)
        );
    }

    invokeGetKeyRotationStatus(partialParams: ToOptional<{
      [K in keyof GetKeyRotationStatusRequest & keyof Omit<GetKeyRotationStatusRequest, "KeyId">]: (GetKeyRotationStatusRequest)[K]
    }>): Request<GetKeyRotationStatusResponse, AWSError> {
        this.boot();
        return this.client.getKeyRotationStatus(
          this.ops["GetKeyRotationStatus"].apply(partialParams)
        );
    }

    invokeGetParametersForImport(partialParams: ToOptional<{
      [K in keyof GetParametersForImportRequest & keyof Omit<GetParametersForImportRequest, "KeyId">]: (GetParametersForImportRequest)[K]
    }>): Request<GetParametersForImportResponse, AWSError> {
        this.boot();
        return this.client.getParametersForImport(
          this.ops["GetParametersForImport"].apply(partialParams)
        );
    }

    invokeGetPublicKey(partialParams: ToOptional<{
      [K in keyof GetPublicKeyRequest & keyof Omit<GetPublicKeyRequest, "KeyId">]: (GetPublicKeyRequest)[K]
    }>): Request<GetPublicKeyResponse, AWSError> {
        this.boot();
        return this.client.getPublicKey(
          this.ops["GetPublicKey"].apply(partialParams)
        );
    }

    invokeImportKeyMaterial(partialParams: ToOptional<{
      [K in keyof ImportKeyMaterialRequest & keyof Omit<ImportKeyMaterialRequest, "KeyId">]: (ImportKeyMaterialRequest)[K]
    }>): Request<ImportKeyMaterialResponse, AWSError> {
        this.boot();
        return this.client.importKeyMaterial(
          this.ops["ImportKeyMaterial"].apply(partialParams)
        );
    }

    invokeListAliases(partialParams: ToOptional<{
      [K in keyof ListAliasesRequest]: (ListAliasesRequest)[K]
    }>): Request<ListAliasesResponse, AWSError> {
        this.boot();
        return this.client.listAliases(
          this.ops["ListAliases"].apply(partialParams)
        );
    }

    invokeListGrants(partialParams: ToOptional<{
      [K in keyof ListGrantsRequest & keyof Omit<ListGrantsRequest, "KeyId">]: (ListGrantsRequest)[K]
    }>): Request<ListGrantsResponse, AWSError> {
        this.boot();
        return this.client.listGrants(
          this.ops["ListGrants"].apply(partialParams)
        );
    }

    invokeListKeyPolicies(partialParams: ToOptional<{
      [K in keyof ListKeyPoliciesRequest & keyof Omit<ListKeyPoliciesRequest, "KeyId">]: (ListKeyPoliciesRequest)[K]
    }>): Request<ListKeyPoliciesResponse, AWSError> {
        this.boot();
        return this.client.listKeyPolicies(
          this.ops["ListKeyPolicies"].apply(partialParams)
        );
    }

    invokeListKeys(partialParams: ToOptional<{
      [K in keyof ListKeysRequest]: (ListKeysRequest)[K]
    }>): Request<ListKeysResponse, AWSError> {
        this.boot();
        return this.client.listKeys(
          this.ops["ListKeys"].apply(partialParams)
        );
    }

    invokeListResourceTags(partialParams: ToOptional<{
      [K in keyof ListResourceTagsRequest & keyof Omit<ListResourceTagsRequest, "KeyId">]: (ListResourceTagsRequest)[K]
    }>): Request<ListResourceTagsResponse, AWSError> {
        this.boot();
        return this.client.listResourceTags(
          this.ops["ListResourceTags"].apply(partialParams)
        );
    }

    invokeListRetirableGrants(partialParams: ToOptional<{
      [K in keyof ListRetirableGrantsRequest]: (ListRetirableGrantsRequest)[K]
    }>): Request<ListGrantsResponse, AWSError> {
        this.boot();
        return this.client.listRetirableGrants(
          this.ops["ListRetirableGrants"].apply(partialParams)
        );
    }

    invokeReEncrypt(partialParams: ToOptional<{
      [K in keyof ReEncryptRequest]: (ReEncryptRequest)[K]
    }>): Request<ReEncryptResponse, AWSError> {
        this.boot();
        return this.client.reEncrypt(
          this.ops["ReEncrypt"].apply(partialParams)
        );
    }

    invokeReplicateKey(partialParams: ToOptional<{
      [K in keyof ReplicateKeyRequest & keyof Omit<ReplicateKeyRequest, "KeyId">]: (ReplicateKeyRequest)[K]
    }>): Request<ReplicateKeyResponse, AWSError> {
        this.boot();
        return this.client.replicateKey(
          this.ops["ReplicateKey"].apply(partialParams)
        );
    }

    invokeScheduleKeyDeletion(partialParams: ToOptional<{
      [K in keyof ScheduleKeyDeletionRequest & keyof Omit<ScheduleKeyDeletionRequest, "KeyId">]: (ScheduleKeyDeletionRequest)[K]
    }>): Request<ScheduleKeyDeletionResponse, AWSError> {
        this.boot();
        return this.client.scheduleKeyDeletion(
          this.ops["ScheduleKeyDeletion"].apply(partialParams)
        );
    }

    invokeSign(partialParams: ToOptional<{
      [K in keyof SignRequest & keyof Omit<SignRequest, "KeyId">]: (SignRequest)[K]
    }>): Request<SignResponse, AWSError> {
        this.boot();
        return this.client.sign(
          this.ops["Sign"].apply(partialParams)
        );
    }

    invokeUpdateCustomKeyStore(partialParams: ToOptional<{
      [K in keyof UpdateCustomKeyStoreRequest]: (UpdateCustomKeyStoreRequest)[K]
    }>): Request<UpdateCustomKeyStoreResponse, AWSError> {
        this.boot();
        return this.client.updateCustomKeyStore(
          this.ops["UpdateCustomKeyStore"].apply(partialParams)
        );
    }

    invokeVerify(partialParams: ToOptional<{
      [K in keyof VerifyRequest & keyof Omit<VerifyRequest, "KeyId">]: (VerifyRequest)[K]
    }>): Request<VerifyResponse, AWSError> {
        this.boot();
        return this.client.verify(
          this.ops["Verify"].apply(partialParams)
        );
    }
}