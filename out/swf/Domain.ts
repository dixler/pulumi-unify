
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CountClosedWorkflowExecutionsInput,
    CountOpenWorkflowExecutionsInput,
    CountPendingActivityTasksInput,
    CountPendingDecisionTasksInput,
    DeprecateActivityTypeInput,
    DeprecateDomainInput,
    DeprecateWorkflowTypeInput,
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
    RegisterActivityTypeInput,
    RegisterDomainInput,
    RegisterWorkflowTypeInput,
    RequestCancelWorkflowExecutionInput,
    RespondActivityTaskCanceledInput,
    RespondActivityTaskCompletedInput,
    RespondActivityTaskFailedInput,
    RespondDecisionTaskCompletedInput,
    SignalWorkflowExecutionInput,
    StartWorkflowExecutionInput,
    TagResourceInput,
    TerminateWorkflowExecutionInput,
    UndeprecateActivityTypeInput,
    UndeprecateDomainInput,
    UndeprecateWorkflowTypeInput,
    UntagResourceInput,
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
    constructor(...args: ConstructorParameters<typeof aws.swf.Domain>) {
        super(...args)
        this.client = new awssdk.SWF()
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

    invokeCountClosedWorkflowExecutions(partialParams: ToOptional<{
      [K in keyof CountClosedWorkflowExecutionsInput & keyof CountClosedWorkflowExecutionsInput & keyof CountClosedWorkflowExecutionsInput & keyof CountClosedWorkflowExecutionsInput & keyof CountClosedWorkflowExecutionsInput]: (CountClosedWorkflowExecutionsInput & CountClosedWorkflowExecutionsInput & CountClosedWorkflowExecutionsInput & CountClosedWorkflowExecutionsInput & CountClosedWorkflowExecutionsInput)[K]
    }>): Request<WorkflowExecutionCount, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.countClosedWorkflowExecutions(
          this.ops["CountClosedWorkflowExecutions"].applicator.apply(partialParams)
        );
    }

    invokeCountOpenWorkflowExecutions(partialParams: ToOptional<{
      [K in keyof CountOpenWorkflowExecutionsInput & keyof CountOpenWorkflowExecutionsInput & keyof CountOpenWorkflowExecutionsInput & keyof CountOpenWorkflowExecutionsInput & keyof CountOpenWorkflowExecutionsInput]: (CountOpenWorkflowExecutionsInput & CountOpenWorkflowExecutionsInput & CountOpenWorkflowExecutionsInput & CountOpenWorkflowExecutionsInput & CountOpenWorkflowExecutionsInput)[K]
    }>): Request<WorkflowExecutionCount, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.countOpenWorkflowExecutions(
          this.ops["CountOpenWorkflowExecutions"].applicator.apply(partialParams)
        );
    }

    invokeCountPendingActivityTasks(partialParams: ToOptional<{
      [K in keyof CountPendingActivityTasksInput & keyof CountPendingActivityTasksInput & keyof CountPendingActivityTasksInput & keyof CountPendingActivityTasksInput & keyof CountPendingActivityTasksInput]: (CountPendingActivityTasksInput & CountPendingActivityTasksInput & CountPendingActivityTasksInput & CountPendingActivityTasksInput & CountPendingActivityTasksInput)[K]
    }>): Request<PendingTaskCount, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.countPendingActivityTasks(
          this.ops["CountPendingActivityTasks"].applicator.apply(partialParams)
        );
    }

    invokeCountPendingDecisionTasks(partialParams: ToOptional<{
      [K in keyof CountPendingDecisionTasksInput & keyof CountPendingDecisionTasksInput & keyof CountPendingDecisionTasksInput & keyof CountPendingDecisionTasksInput & keyof CountPendingDecisionTasksInput]: (CountPendingDecisionTasksInput & CountPendingDecisionTasksInput & CountPendingDecisionTasksInput & CountPendingDecisionTasksInput & CountPendingDecisionTasksInput)[K]
    }>): Request<PendingTaskCount, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.countPendingDecisionTasks(
          this.ops["CountPendingDecisionTasks"].applicator.apply(partialParams)
        );
    }

    invokeDeprecateActivityType(partialParams: ToOptional<{
      [K in keyof DeprecateActivityTypeInput & keyof DeprecateActivityTypeInput & keyof DeprecateActivityTypeInput & keyof DeprecateActivityTypeInput & keyof DeprecateActivityTypeInput]: (DeprecateActivityTypeInput & DeprecateActivityTypeInput & DeprecateActivityTypeInput & DeprecateActivityTypeInput & DeprecateActivityTypeInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deprecateActivityType(
          this.ops["DeprecateActivityType"].applicator.apply(partialParams)
        );
    }

    invokeDeprecateDomain(partialParams: ToOptional<{
      [K in keyof DeprecateDomainInput & keyof DeprecateDomainInput & keyof DeprecateDomainInput & keyof DeprecateDomainInput & keyof DeprecateDomainInput]: (DeprecateDomainInput & DeprecateDomainInput & DeprecateDomainInput & DeprecateDomainInput & DeprecateDomainInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deprecateDomain(
          this.ops["DeprecateDomain"].applicator.apply(partialParams)
        );
    }

    invokeDeprecateWorkflowType(partialParams: ToOptional<{
      [K in keyof DeprecateWorkflowTypeInput & keyof DeprecateWorkflowTypeInput & keyof DeprecateWorkflowTypeInput & keyof DeprecateWorkflowTypeInput & keyof DeprecateWorkflowTypeInput]: (DeprecateWorkflowTypeInput & DeprecateWorkflowTypeInput & DeprecateWorkflowTypeInput & DeprecateWorkflowTypeInput & DeprecateWorkflowTypeInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deprecateWorkflowType(
          this.ops["DeprecateWorkflowType"].applicator.apply(partialParams)
        );
    }

    invokeDescribeActivityType(partialParams: ToOptional<{
      [K in keyof DescribeActivityTypeInput & keyof DescribeActivityTypeInput & keyof DescribeActivityTypeInput & keyof DescribeActivityTypeInput & keyof DescribeActivityTypeInput]: (DescribeActivityTypeInput & DescribeActivityTypeInput & DescribeActivityTypeInput & DescribeActivityTypeInput & DescribeActivityTypeInput)[K]
    }>): Request<ActivityTypeDetail, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeActivityType(
          this.ops["DescribeActivityType"].applicator.apply(partialParams)
        );
    }

    invokeDescribeDomain(partialParams: ToOptional<{
      [K in keyof DescribeDomainInput & keyof DescribeDomainInput & keyof DescribeDomainInput & keyof DescribeDomainInput & keyof DescribeDomainInput]: (DescribeDomainInput & DescribeDomainInput & DescribeDomainInput & DescribeDomainInput & DescribeDomainInput)[K]
    }>): Request<DomainDetail, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeDomain(
          this.ops["DescribeDomain"].applicator.apply(partialParams)
        );
    }

    invokeDescribeWorkflowExecution(partialParams: ToOptional<{
      [K in keyof DescribeWorkflowExecutionInput & keyof DescribeWorkflowExecutionInput & keyof DescribeWorkflowExecutionInput & keyof DescribeWorkflowExecutionInput & keyof DescribeWorkflowExecutionInput]: (DescribeWorkflowExecutionInput & DescribeWorkflowExecutionInput & DescribeWorkflowExecutionInput & DescribeWorkflowExecutionInput & DescribeWorkflowExecutionInput)[K]
    }>): Request<WorkflowExecutionDetail, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeWorkflowExecution(
          this.ops["DescribeWorkflowExecution"].applicator.apply(partialParams)
        );
    }

    invokeDescribeWorkflowType(partialParams: ToOptional<{
      [K in keyof DescribeWorkflowTypeInput & keyof DescribeWorkflowTypeInput & keyof DescribeWorkflowTypeInput & keyof DescribeWorkflowTypeInput & keyof DescribeWorkflowTypeInput]: (DescribeWorkflowTypeInput & DescribeWorkflowTypeInput & DescribeWorkflowTypeInput & DescribeWorkflowTypeInput & DescribeWorkflowTypeInput)[K]
    }>): Request<WorkflowTypeDetail, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeWorkflowType(
          this.ops["DescribeWorkflowType"].applicator.apply(partialParams)
        );
    }

    invokeGetWorkflowExecutionHistory(partialParams: ToOptional<{
      [K in keyof GetWorkflowExecutionHistoryInput & keyof GetWorkflowExecutionHistoryInput & keyof GetWorkflowExecutionHistoryInput & keyof GetWorkflowExecutionHistoryInput & keyof GetWorkflowExecutionHistoryInput]: (GetWorkflowExecutionHistoryInput & GetWorkflowExecutionHistoryInput & GetWorkflowExecutionHistoryInput & GetWorkflowExecutionHistoryInput & GetWorkflowExecutionHistoryInput)[K]
    }>): Request<History, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getWorkflowExecutionHistory(
          this.ops["GetWorkflowExecutionHistory"].applicator.apply(partialParams)
        );
    }

    invokeListActivityTypes(partialParams: ToOptional<{
      [K in keyof ListActivityTypesInput & keyof ListActivityTypesInput & keyof ListActivityTypesInput & keyof ListActivityTypesInput & keyof ListActivityTypesInput]: (ListActivityTypesInput & ListActivityTypesInput & ListActivityTypesInput & ListActivityTypesInput & ListActivityTypesInput)[K]
    }>): Request<ActivityTypeInfos, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listActivityTypes(
          this.ops["ListActivityTypes"].applicator.apply(partialParams)
        );
    }

    invokeListClosedWorkflowExecutions(partialParams: ToOptional<{
      [K in keyof ListClosedWorkflowExecutionsInput & keyof ListClosedWorkflowExecutionsInput & keyof ListClosedWorkflowExecutionsInput & keyof ListClosedWorkflowExecutionsInput & keyof ListClosedWorkflowExecutionsInput]: (ListClosedWorkflowExecutionsInput & ListClosedWorkflowExecutionsInput & ListClosedWorkflowExecutionsInput & ListClosedWorkflowExecutionsInput & ListClosedWorkflowExecutionsInput)[K]
    }>): Request<WorkflowExecutionInfos, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listClosedWorkflowExecutions(
          this.ops["ListClosedWorkflowExecutions"].applicator.apply(partialParams)
        );
    }

    invokeListDomains(partialParams: ToOptional<{
      [K in keyof ListDomainsInput & keyof ListDomainsInput & keyof ListDomainsInput & keyof ListDomainsInput & keyof ListDomainsInput]: (ListDomainsInput & ListDomainsInput & ListDomainsInput & ListDomainsInput & ListDomainsInput)[K]
    }>): Request<DomainInfos, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listDomains(
          this.ops["ListDomains"].applicator.apply(partialParams)
        );
    }

    invokeListOpenWorkflowExecutions(partialParams: ToOptional<{
      [K in keyof ListOpenWorkflowExecutionsInput & keyof ListOpenWorkflowExecutionsInput & keyof ListOpenWorkflowExecutionsInput & keyof ListOpenWorkflowExecutionsInput & keyof ListOpenWorkflowExecutionsInput]: (ListOpenWorkflowExecutionsInput & ListOpenWorkflowExecutionsInput & ListOpenWorkflowExecutionsInput & ListOpenWorkflowExecutionsInput & ListOpenWorkflowExecutionsInput)[K]
    }>): Request<WorkflowExecutionInfos, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listOpenWorkflowExecutions(
          this.ops["ListOpenWorkflowExecutions"].applicator.apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof Omit<ListTagsForResourceInput, "resourceArn"> & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput]: (Omit<ListTagsForResourceInput, "resourceArn"> & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput)[K]
    }>): Request<ListTagsForResourceOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].applicator.apply(partialParams)
        );
    }

    invokeListWorkflowTypes(partialParams: ToOptional<{
      [K in keyof ListWorkflowTypesInput & keyof ListWorkflowTypesInput & keyof ListWorkflowTypesInput & keyof ListWorkflowTypesInput & keyof ListWorkflowTypesInput]: (ListWorkflowTypesInput & ListWorkflowTypesInput & ListWorkflowTypesInput & ListWorkflowTypesInput & ListWorkflowTypesInput)[K]
    }>): Request<WorkflowTypeInfos, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listWorkflowTypes(
          this.ops["ListWorkflowTypes"].applicator.apply(partialParams)
        );
    }

    invokePollForActivityTask(partialParams: ToOptional<{
      [K in keyof PollForActivityTaskInput & keyof PollForActivityTaskInput & keyof PollForActivityTaskInput & keyof PollForActivityTaskInput & keyof PollForActivityTaskInput]: (PollForActivityTaskInput & PollForActivityTaskInput & PollForActivityTaskInput & PollForActivityTaskInput & PollForActivityTaskInput)[K]
    }>): Request<ActivityTask, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.pollForActivityTask(
          this.ops["PollForActivityTask"].applicator.apply(partialParams)
        );
    }

    invokePollForDecisionTask(partialParams: ToOptional<{
      [K in keyof PollForDecisionTaskInput & keyof PollForDecisionTaskInput & keyof PollForDecisionTaskInput & keyof PollForDecisionTaskInput & keyof PollForDecisionTaskInput]: (PollForDecisionTaskInput & PollForDecisionTaskInput & PollForDecisionTaskInput & PollForDecisionTaskInput & PollForDecisionTaskInput)[K]
    }>): Request<DecisionTask, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.pollForDecisionTask(
          this.ops["PollForDecisionTask"].applicator.apply(partialParams)
        );
    }

    invokeRecordActivityTaskHeartbeat(partialParams: ToOptional<{
      [K in keyof RecordActivityTaskHeartbeatInput & keyof RecordActivityTaskHeartbeatInput & keyof RecordActivityTaskHeartbeatInput & keyof RecordActivityTaskHeartbeatInput & keyof RecordActivityTaskHeartbeatInput]: (RecordActivityTaskHeartbeatInput & RecordActivityTaskHeartbeatInput & RecordActivityTaskHeartbeatInput & RecordActivityTaskHeartbeatInput & RecordActivityTaskHeartbeatInput)[K]
    }>): Request<ActivityTaskStatus, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.recordActivityTaskHeartbeat(
          this.ops["RecordActivityTaskHeartbeat"].applicator.apply(partialParams)
        );
    }

    invokeRegisterActivityType(partialParams: ToOptional<{
      [K in keyof RegisterActivityTypeInput & keyof RegisterActivityTypeInput & keyof Omit<RegisterActivityTypeInput, "name"> & keyof RegisterActivityTypeInput & keyof RegisterActivityTypeInput]: (RegisterActivityTypeInput & RegisterActivityTypeInput & Omit<RegisterActivityTypeInput, "name"> & RegisterActivityTypeInput & RegisterActivityTypeInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.registerActivityType(
          this.ops["RegisterActivityType"].applicator.apply(partialParams)
        );
    }

    invokeRegisterDomain(partialParams: ToOptional<{
      [K in keyof RegisterDomainInput & keyof RegisterDomainInput & keyof Omit<RegisterDomainInput, "name"> & keyof RegisterDomainInput & keyof Omit<RegisterDomainInput, "workflowExecutionRetentionPeriodInDays">]: (RegisterDomainInput & RegisterDomainInput & Omit<RegisterDomainInput, "name"> & RegisterDomainInput & Omit<RegisterDomainInput, "workflowExecutionRetentionPeriodInDays">)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.registerDomain(
          this.ops["RegisterDomain"].applicator.apply(partialParams)
        );
    }

    invokeRegisterWorkflowType(partialParams: ToOptional<{
      [K in keyof RegisterWorkflowTypeInput & keyof RegisterWorkflowTypeInput & keyof Omit<RegisterWorkflowTypeInput, "name"> & keyof RegisterWorkflowTypeInput & keyof RegisterWorkflowTypeInput]: (RegisterWorkflowTypeInput & RegisterWorkflowTypeInput & Omit<RegisterWorkflowTypeInput, "name"> & RegisterWorkflowTypeInput & RegisterWorkflowTypeInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.registerWorkflowType(
          this.ops["RegisterWorkflowType"].applicator.apply(partialParams)
        );
    }

    invokeRequestCancelWorkflowExecution(partialParams: ToOptional<{
      [K in keyof RequestCancelWorkflowExecutionInput & keyof RequestCancelWorkflowExecutionInput & keyof RequestCancelWorkflowExecutionInput & keyof RequestCancelWorkflowExecutionInput & keyof RequestCancelWorkflowExecutionInput]: (RequestCancelWorkflowExecutionInput & RequestCancelWorkflowExecutionInput & RequestCancelWorkflowExecutionInput & RequestCancelWorkflowExecutionInput & RequestCancelWorkflowExecutionInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.requestCancelWorkflowExecution(
          this.ops["RequestCancelWorkflowExecution"].applicator.apply(partialParams)
        );
    }

    invokeRespondActivityTaskCanceled(partialParams: ToOptional<{
      [K in keyof RespondActivityTaskCanceledInput & keyof RespondActivityTaskCanceledInput & keyof RespondActivityTaskCanceledInput & keyof RespondActivityTaskCanceledInput & keyof RespondActivityTaskCanceledInput]: (RespondActivityTaskCanceledInput & RespondActivityTaskCanceledInput & RespondActivityTaskCanceledInput & RespondActivityTaskCanceledInput & RespondActivityTaskCanceledInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.respondActivityTaskCanceled(
          this.ops["RespondActivityTaskCanceled"].applicator.apply(partialParams)
        );
    }

    invokeRespondActivityTaskCompleted(partialParams: ToOptional<{
      [K in keyof RespondActivityTaskCompletedInput & keyof RespondActivityTaskCompletedInput & keyof RespondActivityTaskCompletedInput & keyof RespondActivityTaskCompletedInput & keyof RespondActivityTaskCompletedInput]: (RespondActivityTaskCompletedInput & RespondActivityTaskCompletedInput & RespondActivityTaskCompletedInput & RespondActivityTaskCompletedInput & RespondActivityTaskCompletedInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.respondActivityTaskCompleted(
          this.ops["RespondActivityTaskCompleted"].applicator.apply(partialParams)
        );
    }

    invokeRespondActivityTaskFailed(partialParams: ToOptional<{
      [K in keyof RespondActivityTaskFailedInput & keyof RespondActivityTaskFailedInput & keyof RespondActivityTaskFailedInput & keyof RespondActivityTaskFailedInput & keyof RespondActivityTaskFailedInput]: (RespondActivityTaskFailedInput & RespondActivityTaskFailedInput & RespondActivityTaskFailedInput & RespondActivityTaskFailedInput & RespondActivityTaskFailedInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.respondActivityTaskFailed(
          this.ops["RespondActivityTaskFailed"].applicator.apply(partialParams)
        );
    }

    invokeRespondDecisionTaskCompleted(partialParams: ToOptional<{
      [K in keyof RespondDecisionTaskCompletedInput & keyof RespondDecisionTaskCompletedInput & keyof RespondDecisionTaskCompletedInput & keyof RespondDecisionTaskCompletedInput & keyof RespondDecisionTaskCompletedInput]: (RespondDecisionTaskCompletedInput & RespondDecisionTaskCompletedInput & RespondDecisionTaskCompletedInput & RespondDecisionTaskCompletedInput & RespondDecisionTaskCompletedInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.respondDecisionTaskCompleted(
          this.ops["RespondDecisionTaskCompleted"].applicator.apply(partialParams)
        );
    }

    invokeSignalWorkflowExecution(partialParams: ToOptional<{
      [K in keyof SignalWorkflowExecutionInput & keyof SignalWorkflowExecutionInput & keyof SignalWorkflowExecutionInput & keyof SignalWorkflowExecutionInput & keyof SignalWorkflowExecutionInput]: (SignalWorkflowExecutionInput & SignalWorkflowExecutionInput & SignalWorkflowExecutionInput & SignalWorkflowExecutionInput & SignalWorkflowExecutionInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.signalWorkflowExecution(
          this.ops["SignalWorkflowExecution"].applicator.apply(partialParams)
        );
    }

    invokeStartWorkflowExecution(partialParams: ToOptional<{
      [K in keyof StartWorkflowExecutionInput & keyof StartWorkflowExecutionInput & keyof StartWorkflowExecutionInput & keyof StartWorkflowExecutionInput & keyof StartWorkflowExecutionInput]: (StartWorkflowExecutionInput & StartWorkflowExecutionInput & StartWorkflowExecutionInput & StartWorkflowExecutionInput & StartWorkflowExecutionInput)[K]
    }>): Request<Run, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startWorkflowExecution(
          this.ops["StartWorkflowExecution"].applicator.apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof Omit<TagResourceInput, "resourceArn"> & keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput]: (Omit<TagResourceInput, "resourceArn"> & TagResourceInput & TagResourceInput & TagResourceInput & TagResourceInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].applicator.apply(partialParams)
        );
    }

    invokeTerminateWorkflowExecution(partialParams: ToOptional<{
      [K in keyof TerminateWorkflowExecutionInput & keyof TerminateWorkflowExecutionInput & keyof TerminateWorkflowExecutionInput & keyof TerminateWorkflowExecutionInput & keyof TerminateWorkflowExecutionInput]: (TerminateWorkflowExecutionInput & TerminateWorkflowExecutionInput & TerminateWorkflowExecutionInput & TerminateWorkflowExecutionInput & TerminateWorkflowExecutionInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.terminateWorkflowExecution(
          this.ops["TerminateWorkflowExecution"].applicator.apply(partialParams)
        );
    }

    invokeUndeprecateActivityType(partialParams: ToOptional<{
      [K in keyof UndeprecateActivityTypeInput & keyof UndeprecateActivityTypeInput & keyof UndeprecateActivityTypeInput & keyof UndeprecateActivityTypeInput & keyof UndeprecateActivityTypeInput]: (UndeprecateActivityTypeInput & UndeprecateActivityTypeInput & UndeprecateActivityTypeInput & UndeprecateActivityTypeInput & UndeprecateActivityTypeInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.undeprecateActivityType(
          this.ops["UndeprecateActivityType"].applicator.apply(partialParams)
        );
    }

    invokeUndeprecateDomain(partialParams: ToOptional<{
      [K in keyof UndeprecateDomainInput & keyof UndeprecateDomainInput & keyof Omit<UndeprecateDomainInput, "name"> & keyof UndeprecateDomainInput & keyof UndeprecateDomainInput]: (UndeprecateDomainInput & UndeprecateDomainInput & Omit<UndeprecateDomainInput, "name"> & UndeprecateDomainInput & UndeprecateDomainInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.undeprecateDomain(
          this.ops["UndeprecateDomain"].applicator.apply(partialParams)
        );
    }

    invokeUndeprecateWorkflowType(partialParams: ToOptional<{
      [K in keyof UndeprecateWorkflowTypeInput & keyof UndeprecateWorkflowTypeInput & keyof UndeprecateWorkflowTypeInput & keyof UndeprecateWorkflowTypeInput & keyof UndeprecateWorkflowTypeInput]: (UndeprecateWorkflowTypeInput & UndeprecateWorkflowTypeInput & UndeprecateWorkflowTypeInput & UndeprecateWorkflowTypeInput & UndeprecateWorkflowTypeInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.undeprecateWorkflowType(
          this.ops["UndeprecateWorkflowType"].applicator.apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof Omit<UntagResourceInput, "resourceArn"> & keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput]: (Omit<UntagResourceInput, "resourceArn"> & UntagResourceInput & UntagResourceInput & UntagResourceInput & UntagResourceInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].applicator.apply(partialParams)
        );
    }
}