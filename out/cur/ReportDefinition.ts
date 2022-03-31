
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    ModifyReportDefinitionRequest,
    PutReportDefinitionRequest,
    ModifyReportDefinitionResponse,
    PutReportDefinitionResponse
} from "aws-sdk/clients/cur";
const schema = require("../apis/cur-2017-01-06.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.cur.ReportDefinition {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.cur.ReportDefinition>) {
        super(...args)
        this.client = new awssdk.CUR()
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

    invokeModifyReportDefinition(partialParams: ToOptional<{
      [K in keyof ModifyReportDefinitionRequest & keyof ModifyReportDefinitionRequest & keyof ModifyReportDefinitionRequest & keyof ModifyReportDefinitionRequest & keyof ModifyReportDefinitionRequest & keyof ModifyReportDefinitionRequest & keyof ModifyReportDefinitionRequest & keyof ModifyReportDefinitionRequest & keyof ModifyReportDefinitionRequest]: (ModifyReportDefinitionRequest & ModifyReportDefinitionRequest & ModifyReportDefinitionRequest & ModifyReportDefinitionRequest & ModifyReportDefinitionRequest & ModifyReportDefinitionRequest & ModifyReportDefinitionRequest & ModifyReportDefinitionRequest & ModifyReportDefinitionRequest)[K]
    }>): Request<ModifyReportDefinitionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyReportDefinition(
          this.ops["ModifyReportDefinition"].applicator.apply(partialParams)
        );
    }

    invokePutReportDefinition(partialParams: ToOptional<{
      [K in keyof PutReportDefinitionRequest & keyof PutReportDefinitionRequest & keyof PutReportDefinitionRequest & keyof PutReportDefinitionRequest & keyof PutReportDefinitionRequest & keyof PutReportDefinitionRequest & keyof PutReportDefinitionRequest & keyof PutReportDefinitionRequest & keyof PutReportDefinitionRequest]: (PutReportDefinitionRequest & PutReportDefinitionRequest & PutReportDefinitionRequest & PutReportDefinitionRequest & PutReportDefinitionRequest & PutReportDefinitionRequest & PutReportDefinitionRequest & PutReportDefinitionRequest & PutReportDefinitionRequest)[K]
    }>): Request<PutReportDefinitionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putReportDefinition(
          this.ops["PutReportDefinition"].applicator.apply(partialParams)
        );
    }
}