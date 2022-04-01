
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CompleteLifecycleActionType,
    DeleteLifecycleHookType,
    PutLifecycleHookType,
    RecordLifecycleActionHeartbeatType,
    CompleteLifecycleActionAnswer,
    DeleteLifecycleHookAnswer,
    PutLifecycleHookAnswer,
    RecordLifecycleActionHeartbeatAnswer
} from "aws-sdk/clients/autoscaling";
const schema = require("../apis/autoscaling-2011-01-01.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.autoscaling.LifecycleHook {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.autoscaling.LifecycleHook>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.AutoScaling()
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

    invokeCompleteLifecycleAction(partialParams: ToOptional<{
      [K in keyof CompleteLifecycleActionType & keyof Omit<CompleteLifecycleActionType, "LifecycleHookName">]: (CompleteLifecycleActionType)[K]
    }>): Request<CompleteLifecycleActionAnswer, AWSError> {
        this.boot();
        return this.client.completeLifecycleAction(
          this.ops["CompleteLifecycleAction"].apply(partialParams)
        );
    }

    invokeDeleteLifecycleHook(partialParams: ToOptional<{
      [K in keyof DeleteLifecycleHookType & keyof Omit<DeleteLifecycleHookType, "LifecycleHookName">]: (DeleteLifecycleHookType)[K]
    }>): Request<DeleteLifecycleHookAnswer, AWSError> {
        this.boot();
        return this.client.deleteLifecycleHook(
          this.ops["DeleteLifecycleHook"].apply(partialParams)
        );
    }

    invokePutLifecycleHook(partialParams: ToOptional<{
      [K in keyof PutLifecycleHookType & keyof Omit<PutLifecycleHookType, "LifecycleHookName">]: (PutLifecycleHookType)[K]
    }>): Request<PutLifecycleHookAnswer, AWSError> {
        this.boot();
        return this.client.putLifecycleHook(
          this.ops["PutLifecycleHook"].apply(partialParams)
        );
    }

    invokeRecordLifecycleActionHeartbeat(partialParams: ToOptional<{
      [K in keyof RecordLifecycleActionHeartbeatType & keyof Omit<RecordLifecycleActionHeartbeatType, "LifecycleHookName">]: (RecordLifecycleActionHeartbeatType)[K]
    }>): Request<RecordLifecycleActionHeartbeatAnswer, AWSError> {
        this.boot();
        return this.client.recordLifecycleActionHeartbeat(
          this.ops["RecordLifecycleActionHeartbeat"].apply(partialParams)
        );
    }
}