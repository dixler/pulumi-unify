
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AcceptAdministratorInvitationRequest,
    AcceptInvitationRequest,
    AcceptAdministratorInvitationResponse,
    AcceptInvitationResponse
} from "aws-sdk/clients/securityhub";
const schema = require("../apis/securityhub-2018-10-26.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.securityhub.InviteAccepter {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.securityhub.InviteAccepter>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.SecurityHub()
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

    invokeAcceptAdministratorInvitation(partialParams: ToOptional<{
      [K in keyof AcceptAdministratorInvitationRequest & keyof Omit<AcceptAdministratorInvitationRequest, "InvitationId">]: (AcceptAdministratorInvitationRequest)[K]
    }>): Request<AcceptAdministratorInvitationResponse, AWSError> {
        this.boot();
        return this.client.acceptAdministratorInvitation(
          this.ops["AcceptAdministratorInvitation"].apply(partialParams)
        );
    }

    invokeAcceptInvitation(partialParams: ToOptional<{
      [K in keyof AcceptInvitationRequest & keyof Omit<AcceptInvitationRequest, "MasterId" | "InvitationId">]: (AcceptInvitationRequest)[K]
    }>): Request<AcceptInvitationResponse, AWSError> {
        this.boot();
        return this.client.acceptInvitation(
          this.ops["AcceptInvitation"].apply(partialParams)
        );
    }
}