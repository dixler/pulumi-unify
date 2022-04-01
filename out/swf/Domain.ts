
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CountClosedWorkflowExecutionsInput,
    CountOpenWorkflowExecutionsInput,
    CountPendingActivityTasksInput,
    CountPendingDecisionTasksInput,
    DescribeActivityTypeInput,
    DescribeDomainInput,
    DescribeWorkflowExecutionInput,
    DescribeWorkflowTypeInput,
    GetWorkflowExecutionHistoryInput,
    ListActivityTypesInput,
    ListClosedWorkflowExecutionsInput,
    ListDomainsInput,
    ListOpenWorkflowExecutionsInput,
    ListTagsForResourceInput,
    ListWorkflowTypesInput,
    PollForActivityTaskInput,
    PollForDecisionTaskInput,
    RecordActivityTaskHeartbeatInput,
    StartWorkflowExecutionInput,
    WorkflowExecutionCount,
    PendingTaskCount,
    ActivityTypeDetail,
    DomainDetail,
    WorkflowExecutionDetail,
    WorkflowTypeDetail,
    History,
    ActivityTypeInfos,
    WorkflowExecutionInfos,
    DomainInfos,
    ListTagsForResourceOutput,
    WorkflowTypeInfos,
    ActivityTask,
    DecisionTask,
    ActivityTaskStatus,
    Run
} from "aws-sdk/clients/swf";
const schema = require("../apis/swf-2012-01-25.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.swf.Domain {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.swf.Domain>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.SWF()
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

    invokeCountClosedWorkflowExecutions(partialParams: ToOptional<{
      [K in keyof CountClosedWorkflowExecutionsInput]: (CountClosedWorkflowExecutionsInput)[K]
    }>): Request<WorkflowExecutionCount, AWSError> {
        this.boot();
        return this.client.countClosedWorkflowExecutions(
          this.ops["CountClosedWorkflowExecutions"].apply(partialParams)
        );
    }

    invokeCountOpenWorkflowExecutions(partialParams: ToOptional<{
      [K in keyof CountOpenWorkflowExecutionsInput]: (CountOpenWorkflowExecutionsInput)[K]
    }>): Request<WorkflowExecutionCount, AWSError> {
        this.boot();
        return this.client.countOpenWorkflowExecutions(
          this.ops["CountOpenWorkflowExecutions"].apply(partialParams)
        );
    }

    invokeCountPendingActivityTasks(partialParams: ToOptional<{
      [K in keyof CountPendingActivityTasksInput]: (CountPendingActivityTasksInput)[K]
    }>): Request<PendingTaskCount, AWSError> {
        this.boot();
        return this.client.countPendingActivityTasks(
          this.ops["CountPendingActivityTasks"].apply(partialParams)
        );
    }

    invokeCountPendingDecisionTasks(partialParams: ToOptional<{
      [K in keyof CountPendingDecisionTasksInput]: (CountPendingDecisionTasksInput)[K]
    }>): Request<PendingTaskCount, AWSError> {
        this.boot();
        return this.client.countPendingDecisionTasks(
          this.ops["CountPendingDecisionTasks"].apply(partialParams)
        );
    }

    invokeDescribeActivityType(partialParams: ToOptional<{
      [K in keyof DescribeActivityTypeInput]: (DescribeActivityTypeInput)[K]
    }>): Request<ActivityTypeDetail, AWSError> {
        this.boot();
        return this.client.describeActivityType(
          this.ops["DescribeActivityType"].apply(partialParams)
        );
    }

    invokeDescribeDomain(partialParams: ToOptional<{
      [K in keyof DescribeDomainInput]: (DescribeDomainInput)[K]
    }>): Request<DomainDetail, AWSError> {
        this.boot();
        return this.client.describeDomain(
          this.ops["DescribeDomain"].apply(partialParams)
        );
    }

    invokeDescribeWorkflowExecution(partialParams: ToOptional<{
      [K in keyof DescribeWorkflowExecutionInput]: (DescribeWorkflowExecutionInput)[K]
    }>): Request<WorkflowExecutionDetail, AWSError> {
        this.boot();
        return this.client.describeWorkflowExecution(
          this.ops["DescribeWorkflowExecution"].apply(partialParams)
        );
    }

    invokeDescribeWorkflowType(partialParams: ToOptional<{
      [K in keyof DescribeWorkflowTypeInput]: (DescribeWorkflowTypeInput)[K]
    }>): Request<WorkflowTypeDetail, AWSError> {
        this.boot();
        return this.client.describeWorkflowType(
          this.ops["DescribeWorkflowType"].apply(partialParams)
        );
    }

    invokeGetWorkflowExecutionHistory(partialParams: ToOptional<{
      [K in keyof GetWorkflowExecutionHistoryInput]: (GetWorkflowExecutionHistoryInput)[K]
    }>): Request<History, AWSError> {
        this.boot();
        return this.client.getWorkflowExecutionHistory(
          this.ops["GetWorkflowExecutionHistory"].apply(partialParams)
        );
    }

    invokeListActivityTypes(partialParams: ToOptional<{
      [K in keyof ListActivityTypesInput]: (ListActivityTypesInput)[K]
    }>): Request<ActivityTypeInfos, AWSError> {
        this.boot();
        return this.client.listActivityTypes(
          this.ops["ListActivityTypes"].apply(partialParams)
        );
    }

    invokeListClosedWorkflowExecutions(partialParams: ToOptional<{
      [K in keyof ListClosedWorkflowExecutionsInput]: (ListClosedWorkflowExecutionsInput)[K]
    }>): Request<WorkflowExecutionInfos, AWSError> {
        this.boot();
        return this.client.listClosedWorkflowExecutions(
          this.ops["ListClosedWorkflowExecutions"].apply(partialParams)
        );
    }

    invokeListDomains(partialParams: ToOptional<{
      [K in keyof ListDomainsInput]: (ListDomainsInput)[K]
    }>): Request<DomainInfos, AWSError> {
        this.boot();
        return this.client.listDomains(
          this.ops["ListDomains"].apply(partialParams)
        );
    }

    invokeListOpenWorkflowExecutions(partialParams: ToOptional<{
      [K in keyof ListOpenWorkflowExecutionsInput]: (ListOpenWorkflowExecutionsInput)[K]
    }>): Request<WorkflowExecutionInfos, AWSError> {
        this.boot();
        return this.client.listOpenWorkflowExecutions(
          this.ops["ListOpenWorkflowExecutions"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceInput]: (ListTagsForResourceInput)[K]
    }>): Request<ListTagsForResourceOutput, AWSError> {
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeListWorkflowTypes(partialParams: ToOptional<{
      [K in keyof ListWorkflowTypesInput]: (ListWorkflowTypesInput)[K]
    }>): Request<WorkflowTypeInfos, AWSError> {
        this.boot();
        return this.client.listWorkflowTypes(
          this.ops["ListWorkflowTypes"].apply(partialParams)
        );
    }

    invokePollForActivityTask(partialParams: ToOptional<{
      [K in keyof PollForActivityTaskInput]: (PollForActivityTaskInput)[K]
    }>): Request<ActivityTask, AWSError> {
        this.boot();
        return this.client.pollForActivityTask(
          this.ops["PollForActivityTask"].apply(partialParams)
        );
    }

    invokePollForDecisionTask(partialParams: ToOptional<{
      [K in keyof PollForDecisionTaskInput]: (PollForDecisionTaskInput)[K]
    }>): Request<DecisionTask, AWSError> {
        this.boot();
        return this.client.pollForDecisionTask(
          this.ops["PollForDecisionTask"].apply(partialParams)
        );
    }

    invokeRecordActivityTaskHeartbeat(partialParams: ToOptional<{
      [K in keyof RecordActivityTaskHeartbeatInput]: (RecordActivityTaskHeartbeatInput)[K]
    }>): Request<ActivityTaskStatus, AWSError> {
        this.boot();
        return this.client.recordActivityTaskHeartbeat(
          this.ops["RecordActivityTaskHeartbeat"].apply(partialParams)
        );
    }

    invokeStartWorkflowExecution(partialParams: ToOptional<{
      [K in keyof StartWorkflowExecutionInput]: (StartWorkflowExecutionInput)[K]
    }>): Request<Run, AWSError> {
        this.boot();
        return this.client.startWorkflowExecution(
          this.ops["StartWorkflowExecution"].apply(partialParams)
        );
    }
}