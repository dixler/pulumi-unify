
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AssociatePhoneNumbersWithVoiceConnectorRequest,
    CreateProxySessionRequest,
    DisassociatePhoneNumbersFromVoiceConnectorRequest,
    GetProxySessionRequest,
    GetVoiceConnectorRequest,
    GetVoiceConnectorEmergencyCallingConfigurationRequest,
    GetVoiceConnectorLoggingConfigurationRequest,
    GetVoiceConnectorOriginationRequest,
    GetVoiceConnectorProxyRequest,
    GetVoiceConnectorStreamingConfigurationRequest,
    GetVoiceConnectorTerminationRequest,
    GetVoiceConnectorTerminationHealthRequest,
    ListProxySessionsRequest,
    ListVoiceConnectorTerminationCredentialsRequest,
    PutVoiceConnectorEmergencyCallingConfigurationRequest,
    PutVoiceConnectorLoggingConfigurationRequest,
    PutVoiceConnectorOriginationRequest,
    PutVoiceConnectorProxyRequest,
    PutVoiceConnectorStreamingConfigurationRequest,
    PutVoiceConnectorTerminationRequest,
    UpdateProxySessionRequest,
    UpdateVoiceConnectorRequest,
    AssociatePhoneNumbersWithVoiceConnectorResponse,
    CreateProxySessionResponse,
    DisassociatePhoneNumbersFromVoiceConnectorResponse,
    GetProxySessionResponse,
    GetVoiceConnectorResponse,
    GetVoiceConnectorEmergencyCallingConfigurationResponse,
    GetVoiceConnectorLoggingConfigurationResponse,
    GetVoiceConnectorOriginationResponse,
    GetVoiceConnectorProxyResponse,
    GetVoiceConnectorStreamingConfigurationResponse,
    GetVoiceConnectorTerminationResponse,
    GetVoiceConnectorTerminationHealthResponse,
    ListProxySessionsResponse,
    ListVoiceConnectorTerminationCredentialsResponse,
    PutVoiceConnectorEmergencyCallingConfigurationResponse,
    PutVoiceConnectorLoggingConfigurationResponse,
    PutVoiceConnectorOriginationResponse,
    PutVoiceConnectorProxyResponse,
    PutVoiceConnectorStreamingConfigurationResponse,
    PutVoiceConnectorTerminationResponse,
    UpdateProxySessionResponse,
    UpdateVoiceConnectorResponse
} from "aws-sdk/clients/chime";
const schema = require("../apis/chime-2018-05-01.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.chime.VoiceConnectorStreaming {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.chime.VoiceConnectorStreaming>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.Chime()
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]: [string, any]) => {
          this.capitalizedParams[upperCamelCase(key)] = value;
          if ((this as any)[upperCamelCase(this.constructor.name)+upperCamelCase(key)] === undefined) {
              this.capitalizedParams[this.constructor.name+upperCamelCase(key)] = value;
          }
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

    invokeAssociatePhoneNumbersWithVoiceConnector(partialParams: ToOptional<{
      [K in keyof AssociatePhoneNumbersWithVoiceConnectorRequest & keyof Omit<AssociatePhoneNumbersWithVoiceConnectorRequest, "VoiceConnectorId">]: (AssociatePhoneNumbersWithVoiceConnectorRequest)[K]
    }>): Request<AssociatePhoneNumbersWithVoiceConnectorResponse, AWSError> {
        this.boot();
        return this.client.associatePhoneNumbersWithVoiceConnector(
          this.ops["AssociatePhoneNumbersWithVoiceConnector"].apply(partialParams)
        );
    }

    invokeCreateProxySession(partialParams: ToOptional<{
      [K in keyof CreateProxySessionRequest & keyof Omit<CreateProxySessionRequest, "VoiceConnectorId">]: (CreateProxySessionRequest)[K]
    }>): Request<CreateProxySessionResponse, AWSError> {
        this.boot();
        return this.client.createProxySession(
          this.ops["CreateProxySession"].apply(partialParams)
        );
    }

    invokeDisassociatePhoneNumbersFromVoiceConnector(partialParams: ToOptional<{
      [K in keyof DisassociatePhoneNumbersFromVoiceConnectorRequest & keyof Omit<DisassociatePhoneNumbersFromVoiceConnectorRequest, "VoiceConnectorId">]: (DisassociatePhoneNumbersFromVoiceConnectorRequest)[K]
    }>): Request<DisassociatePhoneNumbersFromVoiceConnectorResponse, AWSError> {
        this.boot();
        return this.client.disassociatePhoneNumbersFromVoiceConnector(
          this.ops["DisassociatePhoneNumbersFromVoiceConnector"].apply(partialParams)
        );
    }

    invokeGetProxySession(partialParams: ToOptional<{
      [K in keyof GetProxySessionRequest & keyof Omit<GetProxySessionRequest, "VoiceConnectorId">]: (GetProxySessionRequest)[K]
    }>): Request<GetProxySessionResponse, AWSError> {
        this.boot();
        return this.client.getProxySession(
          this.ops["GetProxySession"].apply(partialParams)
        );
    }

    invokeGetVoiceConnector(partialParams: ToOptional<{
      [K in keyof GetVoiceConnectorRequest & keyof Omit<GetVoiceConnectorRequest, "VoiceConnectorId">]: (GetVoiceConnectorRequest)[K]
    }>): Request<GetVoiceConnectorResponse, AWSError> {
        this.boot();
        return this.client.getVoiceConnector(
          this.ops["GetVoiceConnector"].apply(partialParams)
        );
    }

    invokeGetVoiceConnectorEmergencyCallingConfiguration(partialParams: ToOptional<{
      [K in keyof GetVoiceConnectorEmergencyCallingConfigurationRequest & keyof Omit<GetVoiceConnectorEmergencyCallingConfigurationRequest, "VoiceConnectorId">]: (GetVoiceConnectorEmergencyCallingConfigurationRequest)[K]
    }>): Request<GetVoiceConnectorEmergencyCallingConfigurationResponse, AWSError> {
        this.boot();
        return this.client.getVoiceConnectorEmergencyCallingConfiguration(
          this.ops["GetVoiceConnectorEmergencyCallingConfiguration"].apply(partialParams)
        );
    }

    invokeGetVoiceConnectorLoggingConfiguration(partialParams: ToOptional<{
      [K in keyof GetVoiceConnectorLoggingConfigurationRequest & keyof Omit<GetVoiceConnectorLoggingConfigurationRequest, "VoiceConnectorId">]: (GetVoiceConnectorLoggingConfigurationRequest)[K]
    }>): Request<GetVoiceConnectorLoggingConfigurationResponse, AWSError> {
        this.boot();
        return this.client.getVoiceConnectorLoggingConfiguration(
          this.ops["GetVoiceConnectorLoggingConfiguration"].apply(partialParams)
        );
    }

    invokeGetVoiceConnectorOrigination(partialParams: ToOptional<{
      [K in keyof GetVoiceConnectorOriginationRequest & keyof Omit<GetVoiceConnectorOriginationRequest, "VoiceConnectorId">]: (GetVoiceConnectorOriginationRequest)[K]
    }>): Request<GetVoiceConnectorOriginationResponse, AWSError> {
        this.boot();
        return this.client.getVoiceConnectorOrigination(
          this.ops["GetVoiceConnectorOrigination"].apply(partialParams)
        );
    }

    invokeGetVoiceConnectorProxy(partialParams: ToOptional<{
      [K in keyof GetVoiceConnectorProxyRequest & keyof Omit<GetVoiceConnectorProxyRequest, "VoiceConnectorId">]: (GetVoiceConnectorProxyRequest)[K]
    }>): Request<GetVoiceConnectorProxyResponse, AWSError> {
        this.boot();
        return this.client.getVoiceConnectorProxy(
          this.ops["GetVoiceConnectorProxy"].apply(partialParams)
        );
    }

    invokeGetVoiceConnectorStreamingConfiguration(partialParams: ToOptional<{
      [K in keyof GetVoiceConnectorStreamingConfigurationRequest & keyof Omit<GetVoiceConnectorStreamingConfigurationRequest, "VoiceConnectorId">]: (GetVoiceConnectorStreamingConfigurationRequest)[K]
    }>): Request<GetVoiceConnectorStreamingConfigurationResponse, AWSError> {
        this.boot();
        return this.client.getVoiceConnectorStreamingConfiguration(
          this.ops["GetVoiceConnectorStreamingConfiguration"].apply(partialParams)
        );
    }

    invokeGetVoiceConnectorTermination(partialParams: ToOptional<{
      [K in keyof GetVoiceConnectorTerminationRequest & keyof Omit<GetVoiceConnectorTerminationRequest, "VoiceConnectorId">]: (GetVoiceConnectorTerminationRequest)[K]
    }>): Request<GetVoiceConnectorTerminationResponse, AWSError> {
        this.boot();
        return this.client.getVoiceConnectorTermination(
          this.ops["GetVoiceConnectorTermination"].apply(partialParams)
        );
    }

    invokeGetVoiceConnectorTerminationHealth(partialParams: ToOptional<{
      [K in keyof GetVoiceConnectorTerminationHealthRequest & keyof Omit<GetVoiceConnectorTerminationHealthRequest, "VoiceConnectorId">]: (GetVoiceConnectorTerminationHealthRequest)[K]
    }>): Request<GetVoiceConnectorTerminationHealthResponse, AWSError> {
        this.boot();
        return this.client.getVoiceConnectorTerminationHealth(
          this.ops["GetVoiceConnectorTerminationHealth"].apply(partialParams)
        );
    }

    invokeListProxySessions(partialParams: ToOptional<{
      [K in keyof ListProxySessionsRequest & keyof Omit<ListProxySessionsRequest, "VoiceConnectorId">]: (ListProxySessionsRequest)[K]
    }>): Request<ListProxySessionsResponse, AWSError> {
        this.boot();
        return this.client.listProxySessions(
          this.ops["ListProxySessions"].apply(partialParams)
        );
    }

    invokeListVoiceConnectorTerminationCredentials(partialParams: ToOptional<{
      [K in keyof ListVoiceConnectorTerminationCredentialsRequest & keyof Omit<ListVoiceConnectorTerminationCredentialsRequest, "VoiceConnectorId">]: (ListVoiceConnectorTerminationCredentialsRequest)[K]
    }>): Request<ListVoiceConnectorTerminationCredentialsResponse, AWSError> {
        this.boot();
        return this.client.listVoiceConnectorTerminationCredentials(
          this.ops["ListVoiceConnectorTerminationCredentials"].apply(partialParams)
        );
    }

    invokePutVoiceConnectorEmergencyCallingConfiguration(partialParams: ToOptional<{
      [K in keyof PutVoiceConnectorEmergencyCallingConfigurationRequest & keyof Omit<PutVoiceConnectorEmergencyCallingConfigurationRequest, "VoiceConnectorId">]: (PutVoiceConnectorEmergencyCallingConfigurationRequest)[K]
    }>): Request<PutVoiceConnectorEmergencyCallingConfigurationResponse, AWSError> {
        this.boot();
        return this.client.putVoiceConnectorEmergencyCallingConfiguration(
          this.ops["PutVoiceConnectorEmergencyCallingConfiguration"].apply(partialParams)
        );
    }

    invokePutVoiceConnectorLoggingConfiguration(partialParams: ToOptional<{
      [K in keyof PutVoiceConnectorLoggingConfigurationRequest & keyof Omit<PutVoiceConnectorLoggingConfigurationRequest, "VoiceConnectorId">]: (PutVoiceConnectorLoggingConfigurationRequest)[K]
    }>): Request<PutVoiceConnectorLoggingConfigurationResponse, AWSError> {
        this.boot();
        return this.client.putVoiceConnectorLoggingConfiguration(
          this.ops["PutVoiceConnectorLoggingConfiguration"].apply(partialParams)
        );
    }

    invokePutVoiceConnectorOrigination(partialParams: ToOptional<{
      [K in keyof PutVoiceConnectorOriginationRequest & keyof Omit<PutVoiceConnectorOriginationRequest, "VoiceConnectorId">]: (PutVoiceConnectorOriginationRequest)[K]
    }>): Request<PutVoiceConnectorOriginationResponse, AWSError> {
        this.boot();
        return this.client.putVoiceConnectorOrigination(
          this.ops["PutVoiceConnectorOrigination"].apply(partialParams)
        );
    }

    invokePutVoiceConnectorProxy(partialParams: ToOptional<{
      [K in keyof PutVoiceConnectorProxyRequest & keyof Omit<PutVoiceConnectorProxyRequest, "VoiceConnectorId">]: (PutVoiceConnectorProxyRequest)[K]
    }>): Request<PutVoiceConnectorProxyResponse, AWSError> {
        this.boot();
        return this.client.putVoiceConnectorProxy(
          this.ops["PutVoiceConnectorProxy"].apply(partialParams)
        );
    }

    invokePutVoiceConnectorStreamingConfiguration(partialParams: ToOptional<{
      [K in keyof PutVoiceConnectorStreamingConfigurationRequest & keyof Omit<PutVoiceConnectorStreamingConfigurationRequest, "VoiceConnectorId">]: (PutVoiceConnectorStreamingConfigurationRequest)[K]
    }>): Request<PutVoiceConnectorStreamingConfigurationResponse, AWSError> {
        this.boot();
        return this.client.putVoiceConnectorStreamingConfiguration(
          this.ops["PutVoiceConnectorStreamingConfiguration"].apply(partialParams)
        );
    }

    invokePutVoiceConnectorTermination(partialParams: ToOptional<{
      [K in keyof PutVoiceConnectorTerminationRequest & keyof Omit<PutVoiceConnectorTerminationRequest, "VoiceConnectorId">]: (PutVoiceConnectorTerminationRequest)[K]
    }>): Request<PutVoiceConnectorTerminationResponse, AWSError> {
        this.boot();
        return this.client.putVoiceConnectorTermination(
          this.ops["PutVoiceConnectorTermination"].apply(partialParams)
        );
    }

    invokeUpdateProxySession(partialParams: ToOptional<{
      [K in keyof UpdateProxySessionRequest & keyof Omit<UpdateProxySessionRequest, "VoiceConnectorId">]: (UpdateProxySessionRequest)[K]
    }>): Request<UpdateProxySessionResponse, AWSError> {
        this.boot();
        return this.client.updateProxySession(
          this.ops["UpdateProxySession"].apply(partialParams)
        );
    }

    invokeUpdateVoiceConnector(partialParams: ToOptional<{
      [K in keyof UpdateVoiceConnectorRequest & keyof Omit<UpdateVoiceConnectorRequest, "VoiceConnectorId">]: (UpdateVoiceConnectorRequest)[K]
    }>): Request<UpdateVoiceConnectorResponse, AWSError> {
        this.boot();
        return this.client.updateVoiceConnector(
          this.ops["UpdateVoiceConnector"].apply(partialParams)
        );
    }
}