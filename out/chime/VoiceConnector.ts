
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateAccountRequest,
    CreateAppInstanceRequest,
    CreateAppInstanceUserRequest,
    CreateChannelRequest,
    CreateRoomRequest,
    CreateSipMediaApplicationRequest,
    CreateSipRuleRequest,
    CreateVoiceConnectorRequest,
    CreateVoiceConnectorGroupRequest,
    UpdateAppInstanceRequest,
    UpdateAppInstanceUserRequest,
    UpdateChannelRequest,
    UpdateSipRuleRequest,
    UpdateVoiceConnectorRequest,
    UpdateVoiceConnectorGroupRequest,
    CreateAccountResponse,
    CreateAppInstanceResponse,
    CreateAppInstanceUserResponse,
    CreateChannelResponse,
    CreateRoomResponse,
    CreateSipMediaApplicationResponse,
    CreateSipRuleResponse,
    CreateVoiceConnectorResponse,
    CreateVoiceConnectorGroupResponse,
    UpdateAppInstanceResponse,
    UpdateAppInstanceUserResponse,
    UpdateChannelResponse,
    UpdateSipRuleResponse,
    UpdateVoiceConnectorResponse,
    UpdateVoiceConnectorGroupResponse
} from "aws-sdk/clients/chime";
const schema = require("../apis/chime-2018-05-01.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.chime.VoiceConnector {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.chime.VoiceConnector>) {
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

    invokeCreateAccount(partialParams: ToOptional<{
      [K in keyof CreateAccountRequest & keyof Omit<CreateAccountRequest, "Name">]: (CreateAccountRequest)[K]
    }>): Request<CreateAccountResponse, AWSError> {
        this.boot();
        return this.client.createAccount(
          this.ops["CreateAccount"].apply(partialParams)
        );
    }

    invokeCreateAppInstance(partialParams: ToOptional<{
      [K in keyof CreateAppInstanceRequest & keyof Omit<CreateAppInstanceRequest, "Name">]: (CreateAppInstanceRequest)[K]
    }>): Request<CreateAppInstanceResponse, AWSError> {
        this.boot();
        return this.client.createAppInstance(
          this.ops["CreateAppInstance"].apply(partialParams)
        );
    }

    invokeCreateAppInstanceUser(partialParams: ToOptional<{
      [K in keyof CreateAppInstanceUserRequest & keyof Omit<CreateAppInstanceUserRequest, "Name">]: (CreateAppInstanceUserRequest)[K]
    }>): Request<CreateAppInstanceUserResponse, AWSError> {
        this.boot();
        return this.client.createAppInstanceUser(
          this.ops["CreateAppInstanceUser"].apply(partialParams)
        );
    }

    invokeCreateChannel(partialParams: ToOptional<{
      [K in keyof CreateChannelRequest & keyof Omit<CreateChannelRequest, "Name">]: (CreateChannelRequest)[K]
    }>): Request<CreateChannelResponse, AWSError> {
        this.boot();
        return this.client.createChannel(
          this.ops["CreateChannel"].apply(partialParams)
        );
    }

    invokeCreateRoom(partialParams: ToOptional<{
      [K in keyof CreateRoomRequest & keyof Omit<CreateRoomRequest, "Name">]: (CreateRoomRequest)[K]
    }>): Request<CreateRoomResponse, AWSError> {
        this.boot();
        return this.client.createRoom(
          this.ops["CreateRoom"].apply(partialParams)
        );
    }

    invokeCreateSipMediaApplication(partialParams: ToOptional<{
      [K in keyof CreateSipMediaApplicationRequest & keyof Omit<CreateSipMediaApplicationRequest, "AwsRegion" | "Name">]: (CreateSipMediaApplicationRequest)[K]
    }>): Request<CreateSipMediaApplicationResponse, AWSError> {
        this.boot();
        return this.client.createSipMediaApplication(
          this.ops["CreateSipMediaApplication"].apply(partialParams)
        );
    }

    invokeCreateSipRule(partialParams: ToOptional<{
      [K in keyof CreateSipRuleRequest & keyof Omit<CreateSipRuleRequest, "Name">]: (CreateSipRuleRequest)[K]
    }>): Request<CreateSipRuleResponse, AWSError> {
        this.boot();
        return this.client.createSipRule(
          this.ops["CreateSipRule"].apply(partialParams)
        );
    }

    invokeCreateVoiceConnector(partialParams: ToOptional<{
      [K in keyof CreateVoiceConnectorRequest & keyof Omit<CreateVoiceConnectorRequest, "Name">]: (CreateVoiceConnectorRequest)[K]
    }>): Request<CreateVoiceConnectorResponse, AWSError> {
        this.boot();
        return this.client.createVoiceConnector(
          this.ops["CreateVoiceConnector"].apply(partialParams)
        );
    }

    invokeCreateVoiceConnectorGroup(partialParams: ToOptional<{
      [K in keyof CreateVoiceConnectorGroupRequest & keyof Omit<CreateVoiceConnectorGroupRequest, "Name">]: (CreateVoiceConnectorGroupRequest)[K]
    }>): Request<CreateVoiceConnectorGroupResponse, AWSError> {
        this.boot();
        return this.client.createVoiceConnectorGroup(
          this.ops["CreateVoiceConnectorGroup"].apply(partialParams)
        );
    }

    invokeUpdateAppInstance(partialParams: ToOptional<{
      [K in keyof UpdateAppInstanceRequest & keyof Omit<UpdateAppInstanceRequest, "Name">]: (UpdateAppInstanceRequest)[K]
    }>): Request<UpdateAppInstanceResponse, AWSError> {
        this.boot();
        return this.client.updateAppInstance(
          this.ops["UpdateAppInstance"].apply(partialParams)
        );
    }

    invokeUpdateAppInstanceUser(partialParams: ToOptional<{
      [K in keyof UpdateAppInstanceUserRequest & keyof Omit<UpdateAppInstanceUserRequest, "Name">]: (UpdateAppInstanceUserRequest)[K]
    }>): Request<UpdateAppInstanceUserResponse, AWSError> {
        this.boot();
        return this.client.updateAppInstanceUser(
          this.ops["UpdateAppInstanceUser"].apply(partialParams)
        );
    }

    invokeUpdateChannel(partialParams: ToOptional<{
      [K in keyof UpdateChannelRequest & keyof Omit<UpdateChannelRequest, "Name">]: (UpdateChannelRequest)[K]
    }>): Request<UpdateChannelResponse, AWSError> {
        this.boot();
        return this.client.updateChannel(
          this.ops["UpdateChannel"].apply(partialParams)
        );
    }

    invokeUpdateSipRule(partialParams: ToOptional<{
      [K in keyof UpdateSipRuleRequest & keyof Omit<UpdateSipRuleRequest, "Name">]: (UpdateSipRuleRequest)[K]
    }>): Request<UpdateSipRuleResponse, AWSError> {
        this.boot();
        return this.client.updateSipRule(
          this.ops["UpdateSipRule"].apply(partialParams)
        );
    }

    invokeUpdateVoiceConnector(partialParams: ToOptional<{
      [K in keyof UpdateVoiceConnectorRequest & keyof Omit<UpdateVoiceConnectorRequest, "Name">]: (UpdateVoiceConnectorRequest)[K]
    }>): Request<UpdateVoiceConnectorResponse, AWSError> {
        this.boot();
        return this.client.updateVoiceConnector(
          this.ops["UpdateVoiceConnector"].apply(partialParams)
        );
    }

    invokeUpdateVoiceConnectorGroup(partialParams: ToOptional<{
      [K in keyof UpdateVoiceConnectorGroupRequest & keyof Omit<UpdateVoiceConnectorGroupRequest, "Name">]: (UpdateVoiceConnectorGroupRequest)[K]
    }>): Request<UpdateVoiceConnectorGroupResponse, AWSError> {
        this.boot();
        return this.client.updateVoiceConnectorGroup(
          this.ops["UpdateVoiceConnectorGroup"].apply(partialParams)
        );
    }
}