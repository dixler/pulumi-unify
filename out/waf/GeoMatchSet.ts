
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateByteMatchSetRequest,
    CreateGeoMatchSetRequest,
    CreateIPSetRequest,
    CreateRateBasedRuleRequest,
    CreateRegexMatchSetRequest,
    CreateRegexPatternSetRequest,
    CreateRuleRequest,
    CreateRuleGroupRequest,
    CreateSizeConstraintSetRequest,
    CreateSqlInjectionMatchSetRequest,
    CreateWebACLRequest,
    CreateXssMatchSetRequest,
    CreateByteMatchSetResponse,
    CreateGeoMatchSetResponse,
    CreateIPSetResponse,
    CreateRateBasedRuleResponse,
    CreateRegexMatchSetResponse,
    CreateRegexPatternSetResponse,
    CreateRuleResponse,
    CreateRuleGroupResponse,
    CreateSizeConstraintSetResponse,
    CreateSqlInjectionMatchSetResponse,
    CreateWebACLResponse,
    CreateXssMatchSetResponse
} from "aws-sdk/clients/waf";
const schema = require("../apis/waf-2015-08-24.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.waf.GeoMatchSet {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.waf.GeoMatchSet>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.WAF()
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

    invokeCreateByteMatchSet(partialParams: ToOptional<{
      [K in keyof CreateByteMatchSetRequest & keyof Omit<CreateByteMatchSetRequest, "Name">]: (CreateByteMatchSetRequest)[K]
    }>): Request<CreateByteMatchSetResponse, AWSError> {
        this.boot();
        return this.client.createByteMatchSet(
          this.ops["CreateByteMatchSet"].apply(partialParams)
        );
    }

    invokeCreateGeoMatchSet(partialParams: ToOptional<{
      [K in keyof CreateGeoMatchSetRequest & keyof Omit<CreateGeoMatchSetRequest, "Name">]: (CreateGeoMatchSetRequest)[K]
    }>): Request<CreateGeoMatchSetResponse, AWSError> {
        this.boot();
        return this.client.createGeoMatchSet(
          this.ops["CreateGeoMatchSet"].apply(partialParams)
        );
    }

    invokeCreateIPSet(partialParams: ToOptional<{
      [K in keyof CreateIPSetRequest & keyof Omit<CreateIPSetRequest, "Name">]: (CreateIPSetRequest)[K]
    }>): Request<CreateIPSetResponse, AWSError> {
        this.boot();
        return this.client.createIPSet(
          this.ops["CreateIPSet"].apply(partialParams)
        );
    }

    invokeCreateRateBasedRule(partialParams: ToOptional<{
      [K in keyof CreateRateBasedRuleRequest & keyof Omit<CreateRateBasedRuleRequest, "Name">]: (CreateRateBasedRuleRequest)[K]
    }>): Request<CreateRateBasedRuleResponse, AWSError> {
        this.boot();
        return this.client.createRateBasedRule(
          this.ops["CreateRateBasedRule"].apply(partialParams)
        );
    }

    invokeCreateRegexMatchSet(partialParams: ToOptional<{
      [K in keyof CreateRegexMatchSetRequest & keyof Omit<CreateRegexMatchSetRequest, "Name">]: (CreateRegexMatchSetRequest)[K]
    }>): Request<CreateRegexMatchSetResponse, AWSError> {
        this.boot();
        return this.client.createRegexMatchSet(
          this.ops["CreateRegexMatchSet"].apply(partialParams)
        );
    }

    invokeCreateRegexPatternSet(partialParams: ToOptional<{
      [K in keyof CreateRegexPatternSetRequest & keyof Omit<CreateRegexPatternSetRequest, "Name">]: (CreateRegexPatternSetRequest)[K]
    }>): Request<CreateRegexPatternSetResponse, AWSError> {
        this.boot();
        return this.client.createRegexPatternSet(
          this.ops["CreateRegexPatternSet"].apply(partialParams)
        );
    }

    invokeCreateRule(partialParams: ToOptional<{
      [K in keyof CreateRuleRequest & keyof Omit<CreateRuleRequest, "Name">]: (CreateRuleRequest)[K]
    }>): Request<CreateRuleResponse, AWSError> {
        this.boot();
        return this.client.createRule(
          this.ops["CreateRule"].apply(partialParams)
        );
    }

    invokeCreateRuleGroup(partialParams: ToOptional<{
      [K in keyof CreateRuleGroupRequest & keyof Omit<CreateRuleGroupRequest, "Name">]: (CreateRuleGroupRequest)[K]
    }>): Request<CreateRuleGroupResponse, AWSError> {
        this.boot();
        return this.client.createRuleGroup(
          this.ops["CreateRuleGroup"].apply(partialParams)
        );
    }

    invokeCreateSizeConstraintSet(partialParams: ToOptional<{
      [K in keyof CreateSizeConstraintSetRequest & keyof Omit<CreateSizeConstraintSetRequest, "Name">]: (CreateSizeConstraintSetRequest)[K]
    }>): Request<CreateSizeConstraintSetResponse, AWSError> {
        this.boot();
        return this.client.createSizeConstraintSet(
          this.ops["CreateSizeConstraintSet"].apply(partialParams)
        );
    }

    invokeCreateSqlInjectionMatchSet(partialParams: ToOptional<{
      [K in keyof CreateSqlInjectionMatchSetRequest & keyof Omit<CreateSqlInjectionMatchSetRequest, "Name">]: (CreateSqlInjectionMatchSetRequest)[K]
    }>): Request<CreateSqlInjectionMatchSetResponse, AWSError> {
        this.boot();
        return this.client.createSqlInjectionMatchSet(
          this.ops["CreateSqlInjectionMatchSet"].apply(partialParams)
        );
    }

    invokeCreateWebACL(partialParams: ToOptional<{
      [K in keyof CreateWebACLRequest & keyof Omit<CreateWebACLRequest, "Name">]: (CreateWebACLRequest)[K]
    }>): Request<CreateWebACLResponse, AWSError> {
        this.boot();
        return this.client.createWebACL(
          this.ops["CreateWebACL"].apply(partialParams)
        );
    }

    invokeCreateXssMatchSet(partialParams: ToOptional<{
      [K in keyof CreateXssMatchSetRequest & keyof Omit<CreateXssMatchSetRequest, "Name">]: (CreateXssMatchSetRequest)[K]
    }>): Request<CreateXssMatchSetResponse, AWSError> {
        this.boot();
        return this.client.createXssMatchSet(
          this.ops["CreateXssMatchSet"].apply(partialParams)
        );
    }
}