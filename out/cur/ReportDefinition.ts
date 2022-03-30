
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {
    ModifyReportDefinitionRequest,
    PutReportDefinitionRequest,
    ModifyReportDefinitionResponse,
    PutReportDefinitionResponse
} from "aws-sdk/clients/cur";

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.cur.ReportDefinition {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.cur.ReportDefinition>) {
        super(...args)
        this.client = new awssdk.CUR()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/cur-2017-01-06.normal.json"), this.client)
    }

    invokeModifyReportDefinition(partialParams: ToOptional<{
      [K in keyof ModifyReportDefinitionRequest & keyof ModifyReportDefinitionRequest & keyof ModifyReportDefinitionRequest & keyof ModifyReportDefinitionRequest & keyof ModifyReportDefinitionRequest & keyof ModifyReportDefinitionRequest & keyof ModifyReportDefinitionRequest & keyof ModifyReportDefinitionRequest & keyof ModifyReportDefinitionRequest]: (ModifyReportDefinitionRequest & ModifyReportDefinitionRequest & ModifyReportDefinitionRequest & ModifyReportDefinitionRequest & ModifyReportDefinitionRequest & ModifyReportDefinitionRequest & ModifyReportDefinitionRequest & ModifyReportDefinitionRequest & ModifyReportDefinitionRequest)[K]
    }>): ModifyReportDefinitionResponse {
        return this.client.modifyReportDefinition(
            this.ops["ModifyReportDefinition"].apply(partialParams)
        );
    }

    invokePutReportDefinition(partialParams: ToOptional<{
      [K in keyof PutReportDefinitionRequest & keyof PutReportDefinitionRequest & keyof PutReportDefinitionRequest & keyof PutReportDefinitionRequest & keyof PutReportDefinitionRequest & keyof PutReportDefinitionRequest & keyof PutReportDefinitionRequest & keyof PutReportDefinitionRequest & keyof PutReportDefinitionRequest]: (PutReportDefinitionRequest & PutReportDefinitionRequest & PutReportDefinitionRequest & PutReportDefinitionRequest & PutReportDefinitionRequest & PutReportDefinitionRequest & PutReportDefinitionRequest & PutReportDefinitionRequest & PutReportDefinitionRequest)[K]
    }>): PutReportDefinitionResponse {
        return this.client.putReportDefinition(
            this.ops["PutReportDefinition"].apply(partialParams)
        );
    }
}