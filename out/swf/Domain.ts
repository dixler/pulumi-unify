
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
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

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.swf.Domain {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.swf.Domain>) {
        super(...args)
        this.client = new awssdk.SWF()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/swf-2012-01-25.normal.json"), this.client)
    }

    invokeCountClosedWorkflowExecutions(partialParams: ToOptional<{
      [K in keyof CountClosedWorkflowExecutionsInput & keyof CountClosedWorkflowExecutionsInput & keyof CountClosedWorkflowExecutionsInput & keyof CountClosedWorkflowExecutionsInput & keyof CountClosedWorkflowExecutionsInput]: (CountClosedWorkflowExecutionsInput & CountClosedWorkflowExecutionsInput & CountClosedWorkflowExecutionsInput & CountClosedWorkflowExecutionsInput & CountClosedWorkflowExecutionsInput)[K]
    }>): WorkflowExecutionCount {
        return this.client.countClosedWorkflowExecutions(
            this.ops["CountClosedWorkflowExecutions"].apply(partialParams)
        );
    }

    invokeCountOpenWorkflowExecutions(partialParams: ToOptional<{
      [K in keyof CountOpenWorkflowExecutionsInput & keyof CountOpenWorkflowExecutionsInput & keyof CountOpenWorkflowExecutionsInput & keyof CountOpenWorkflowExecutionsInput & keyof CountOpenWorkflowExecutionsInput]: (CountOpenWorkflowExecutionsInput & CountOpenWorkflowExecutionsInput & CountOpenWorkflowExecutionsInput & CountOpenWorkflowExecutionsInput & CountOpenWorkflowExecutionsInput)[K]
    }>): WorkflowExecutionCount {
        return this.client.countOpenWorkflowExecutions(
            this.ops["CountOpenWorkflowExecutions"].apply(partialParams)
        );
    }

    invokeCountPendingActivityTasks(partialParams: ToOptional<{
      [K in keyof CountPendingActivityTasksInput & keyof CountPendingActivityTasksInput & keyof CountPendingActivityTasksInput & keyof CountPendingActivityTasksInput & keyof CountPendingActivityTasksInput]: (CountPendingActivityTasksInput & CountPendingActivityTasksInput & CountPendingActivityTasksInput & CountPendingActivityTasksInput & CountPendingActivityTasksInput)[K]
    }>): PendingTaskCount {
        return this.client.countPendingActivityTasks(
            this.ops["CountPendingActivityTasks"].apply(partialParams)
        );
    }

    invokeCountPendingDecisionTasks(partialParams: ToOptional<{
      [K in keyof CountPendingDecisionTasksInput & keyof CountPendingDecisionTasksInput & keyof CountPendingDecisionTasksInput & keyof CountPendingDecisionTasksInput & keyof CountPendingDecisionTasksInput]: (CountPendingDecisionTasksInput & CountPendingDecisionTasksInput & CountPendingDecisionTasksInput & CountPendingDecisionTasksInput & CountPendingDecisionTasksInput)[K]
    }>): PendingTaskCount {
        return this.client.countPendingDecisionTasks(
            this.ops["CountPendingDecisionTasks"].apply(partialParams)
        );
    }

    invokeDeprecateActivityType(partialParams: ToOptional<{
      [K in keyof DeprecateActivityTypeInput & keyof DeprecateActivityTypeInput & keyof DeprecateActivityTypeInput & keyof DeprecateActivityTypeInput & keyof DeprecateActivityTypeInput]: (DeprecateActivityTypeInput & DeprecateActivityTypeInput & DeprecateActivityTypeInput & DeprecateActivityTypeInput & DeprecateActivityTypeInput)[K]
    }>): void {
        return this.client.deprecateActivityType(
            this.ops["DeprecateActivityType"].apply(partialParams)
        );
    }

    invokeDeprecateDomain(partialParams: ToOptional<{
      [K in keyof DeprecateDomainInput & keyof DeprecateDomainInput & keyof DeprecateDomainInput & keyof DeprecateDomainInput & keyof DeprecateDomainInput]: (DeprecateDomainInput & DeprecateDomainInput & DeprecateDomainInput & DeprecateDomainInput & DeprecateDomainInput)[K]
    }>): void {
        return this.client.deprecateDomain(
            this.ops["DeprecateDomain"].apply(partialParams)
        );
    }

    invokeDeprecateWorkflowType(partialParams: ToOptional<{
      [K in keyof DeprecateWorkflowTypeInput & keyof DeprecateWorkflowTypeInput & keyof DeprecateWorkflowTypeInput & keyof DeprecateWorkflowTypeInput & keyof DeprecateWorkflowTypeInput]: (DeprecateWorkflowTypeInput & DeprecateWorkflowTypeInput & DeprecateWorkflowTypeInput & DeprecateWorkflowTypeInput & DeprecateWorkflowTypeInput)[K]
    }>): void {
        return this.client.deprecateWorkflowType(
            this.ops["DeprecateWorkflowType"].apply(partialParams)
        );
    }

    invokeDescribeActivityType(partialParams: ToOptional<{
      [K in keyof DescribeActivityTypeInput & keyof DescribeActivityTypeInput & keyof DescribeActivityTypeInput & keyof DescribeActivityTypeInput & keyof DescribeActivityTypeInput]: (DescribeActivityTypeInput & DescribeActivityTypeInput & DescribeActivityTypeInput & DescribeActivityTypeInput & DescribeActivityTypeInput)[K]
    }>): ActivityTypeDetail {
        return this.client.describeActivityType(
            this.ops["DescribeActivityType"].apply(partialParams)
        );
    }

    invokeDescribeDomain(partialParams: ToOptional<{
      [K in keyof DescribeDomainInput & keyof DescribeDomainInput & keyof DescribeDomainInput & keyof DescribeDomainInput & keyof DescribeDomainInput]: (DescribeDomainInput & DescribeDomainInput & DescribeDomainInput & DescribeDomainInput & DescribeDomainInput)[K]
    }>): DomainDetail {
        return this.client.describeDomain(
            this.ops["DescribeDomain"].apply(partialParams)
        );
    }

    invokeDescribeWorkflowExecution(partialParams: ToOptional<{
      [K in keyof DescribeWorkflowExecutionInput & keyof DescribeWorkflowExecutionInput & keyof DescribeWorkflowExecutionInput & keyof DescribeWorkflowExecutionInput & keyof DescribeWorkflowExecutionInput]: (DescribeWorkflowExecutionInput & DescribeWorkflowExecutionInput & DescribeWorkflowExecutionInput & DescribeWorkflowExecutionInput & DescribeWorkflowExecutionInput)[K]
    }>): WorkflowExecutionDetail {
        return this.client.describeWorkflowExecution(
            this.ops["DescribeWorkflowExecution"].apply(partialParams)
        );
    }

    invokeDescribeWorkflowType(partialParams: ToOptional<{
      [K in keyof DescribeWorkflowTypeInput & keyof DescribeWorkflowTypeInput & keyof DescribeWorkflowTypeInput & keyof DescribeWorkflowTypeInput & keyof DescribeWorkflowTypeInput]: (DescribeWorkflowTypeInput & DescribeWorkflowTypeInput & DescribeWorkflowTypeInput & DescribeWorkflowTypeInput & DescribeWorkflowTypeInput)[K]
    }>): WorkflowTypeDetail {
        return this.client.describeWorkflowType(
            this.ops["DescribeWorkflowType"].apply(partialParams)
        );
    }

    invokeGetWorkflowExecutionHistory(partialParams: ToOptional<{
      [K in keyof GetWorkflowExecutionHistoryInput & keyof GetWorkflowExecutionHistoryInput & keyof GetWorkflowExecutionHistoryInput & keyof GetWorkflowExecutionHistoryInput & keyof GetWorkflowExecutionHistoryInput]: (GetWorkflowExecutionHistoryInput & GetWorkflowExecutionHistoryInput & GetWorkflowExecutionHistoryInput & GetWorkflowExecutionHistoryInput & GetWorkflowExecutionHistoryInput)[K]
    }>): History {
        return this.client.getWorkflowExecutionHistory(
            this.ops["GetWorkflowExecutionHistory"].apply(partialParams)
        );
    }

    invokeListActivityTypes(partialParams: ToOptional<{
      [K in keyof ListActivityTypesInput & keyof ListActivityTypesInput & keyof ListActivityTypesInput & keyof ListActivityTypesInput & keyof ListActivityTypesInput]: (ListActivityTypesInput & ListActivityTypesInput & ListActivityTypesInput & ListActivityTypesInput & ListActivityTypesInput)[K]
    }>): ActivityTypeInfos {
        return this.client.listActivityTypes(
            this.ops["ListActivityTypes"].apply(partialParams)
        );
    }

    invokeListClosedWorkflowExecutions(partialParams: ToOptional<{
      [K in keyof ListClosedWorkflowExecutionsInput & keyof ListClosedWorkflowExecutionsInput & keyof ListClosedWorkflowExecutionsInput & keyof ListClosedWorkflowExecutionsInput & keyof ListClosedWorkflowExecutionsInput]: (ListClosedWorkflowExecutionsInput & ListClosedWorkflowExecutionsInput & ListClosedWorkflowExecutionsInput & ListClosedWorkflowExecutionsInput & ListClosedWorkflowExecutionsInput)[K]
    }>): WorkflowExecutionInfos {
        return this.client.listClosedWorkflowExecutions(
            this.ops["ListClosedWorkflowExecutions"].apply(partialParams)
        );
    }

    invokeListDomains(partialParams: ToOptional<{
      [K in keyof ListDomainsInput & keyof ListDomainsInput & keyof ListDomainsInput & keyof ListDomainsInput & keyof ListDomainsInput]: (ListDomainsInput & ListDomainsInput & ListDomainsInput & ListDomainsInput & ListDomainsInput)[K]
    }>): DomainInfos {
        return this.client.listDomains(
            this.ops["ListDomains"].apply(partialParams)
        );
    }

    invokeListOpenWorkflowExecutions(partialParams: ToOptional<{
      [K in keyof ListOpenWorkflowExecutionsInput & keyof ListOpenWorkflowExecutionsInput & keyof ListOpenWorkflowExecutionsInput & keyof ListOpenWorkflowExecutionsInput & keyof ListOpenWorkflowExecutionsInput]: (ListOpenWorkflowExecutionsInput & ListOpenWorkflowExecutionsInput & ListOpenWorkflowExecutionsInput & ListOpenWorkflowExecutionsInput & ListOpenWorkflowExecutionsInput)[K]
    }>): WorkflowExecutionInfos {
        return this.client.listOpenWorkflowExecutions(
            this.ops["ListOpenWorkflowExecutions"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof Omit<ListTagsForResourceInput, "resourceArn"> & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput]: (Omit<ListTagsForResourceInput, "resourceArn"> & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput)[K]
    }>): ListTagsForResourceOutput {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeListWorkflowTypes(partialParams: ToOptional<{
      [K in keyof ListWorkflowTypesInput & keyof ListWorkflowTypesInput & keyof ListWorkflowTypesInput & keyof ListWorkflowTypesInput & keyof ListWorkflowTypesInput]: (ListWorkflowTypesInput & ListWorkflowTypesInput & ListWorkflowTypesInput & ListWorkflowTypesInput & ListWorkflowTypesInput)[K]
    }>): WorkflowTypeInfos {
        return this.client.listWorkflowTypes(
            this.ops["ListWorkflowTypes"].apply(partialParams)
        );
    }

    invokePollForActivityTask(partialParams: ToOptional<{
      [K in keyof PollForActivityTaskInput & keyof PollForActivityTaskInput & keyof PollForActivityTaskInput & keyof PollForActivityTaskInput & keyof PollForActivityTaskInput]: (PollForActivityTaskInput & PollForActivityTaskInput & PollForActivityTaskInput & PollForActivityTaskInput & PollForActivityTaskInput)[K]
    }>): ActivityTask {
        return this.client.pollForActivityTask(
            this.ops["PollForActivityTask"].apply(partialParams)
        );
    }

    invokePollForDecisionTask(partialParams: ToOptional<{
      [K in keyof PollForDecisionTaskInput & keyof PollForDecisionTaskInput & keyof PollForDecisionTaskInput & keyof PollForDecisionTaskInput & keyof PollForDecisionTaskInput]: (PollForDecisionTaskInput & PollForDecisionTaskInput & PollForDecisionTaskInput & PollForDecisionTaskInput & PollForDecisionTaskInput)[K]
    }>): DecisionTask {
        return this.client.pollForDecisionTask(
            this.ops["PollForDecisionTask"].apply(partialParams)
        );
    }

    invokeRecordActivityTaskHeartbeat(partialParams: ToOptional<{
      [K in keyof RecordActivityTaskHeartbeatInput & keyof RecordActivityTaskHeartbeatInput & keyof RecordActivityTaskHeartbeatInput & keyof RecordActivityTaskHeartbeatInput & keyof RecordActivityTaskHeartbeatInput]: (RecordActivityTaskHeartbeatInput & RecordActivityTaskHeartbeatInput & RecordActivityTaskHeartbeatInput & RecordActivityTaskHeartbeatInput & RecordActivityTaskHeartbeatInput)[K]
    }>): ActivityTaskStatus {
        return this.client.recordActivityTaskHeartbeat(
            this.ops["RecordActivityTaskHeartbeat"].apply(partialParams)
        );
    }

    invokeRegisterActivityType(partialParams: ToOptional<{
      [K in keyof RegisterActivityTypeInput & keyof RegisterActivityTypeInput & keyof Omit<RegisterActivityTypeInput, "name"> & keyof RegisterActivityTypeInput & keyof RegisterActivityTypeInput]: (RegisterActivityTypeInput & RegisterActivityTypeInput & Omit<RegisterActivityTypeInput, "name"> & RegisterActivityTypeInput & RegisterActivityTypeInput)[K]
    }>): void {
        return this.client.registerActivityType(
            this.ops["RegisterActivityType"].apply(partialParams)
        );
    }

    invokeRegisterDomain(partialParams: ToOptional<{
      [K in keyof RegisterDomainInput & keyof RegisterDomainInput & keyof Omit<RegisterDomainInput, "name"> & keyof RegisterDomainInput & keyof Omit<RegisterDomainInput, "workflowExecutionRetentionPeriodInDays">]: (RegisterDomainInput & RegisterDomainInput & Omit<RegisterDomainInput, "name"> & RegisterDomainInput & Omit<RegisterDomainInput, "workflowExecutionRetentionPeriodInDays">)[K]
    }>): void {
        return this.client.registerDomain(
            this.ops["RegisterDomain"].apply(partialParams)
        );
    }

    invokeRegisterWorkflowType(partialParams: ToOptional<{
      [K in keyof RegisterWorkflowTypeInput & keyof RegisterWorkflowTypeInput & keyof Omit<RegisterWorkflowTypeInput, "name"> & keyof RegisterWorkflowTypeInput & keyof RegisterWorkflowTypeInput]: (RegisterWorkflowTypeInput & RegisterWorkflowTypeInput & Omit<RegisterWorkflowTypeInput, "name"> & RegisterWorkflowTypeInput & RegisterWorkflowTypeInput)[K]
    }>): void {
        return this.client.registerWorkflowType(
            this.ops["RegisterWorkflowType"].apply(partialParams)
        );
    }

    invokeRequestCancelWorkflowExecution(partialParams: ToOptional<{
      [K in keyof RequestCancelWorkflowExecutionInput & keyof RequestCancelWorkflowExecutionInput & keyof RequestCancelWorkflowExecutionInput & keyof RequestCancelWorkflowExecutionInput & keyof RequestCancelWorkflowExecutionInput]: (RequestCancelWorkflowExecutionInput & RequestCancelWorkflowExecutionInput & RequestCancelWorkflowExecutionInput & RequestCancelWorkflowExecutionInput & RequestCancelWorkflowExecutionInput)[K]
    }>): void {
        return this.client.requestCancelWorkflowExecution(
            this.ops["RequestCancelWorkflowExecution"].apply(partialParams)
        );
    }

    invokeRespondActivityTaskCanceled(partialParams: ToOptional<{
      [K in keyof RespondActivityTaskCanceledInput & keyof RespondActivityTaskCanceledInput & keyof RespondActivityTaskCanceledInput & keyof RespondActivityTaskCanceledInput & keyof RespondActivityTaskCanceledInput]: (RespondActivityTaskCanceledInput & RespondActivityTaskCanceledInput & RespondActivityTaskCanceledInput & RespondActivityTaskCanceledInput & RespondActivityTaskCanceledInput)[K]
    }>): void {
        return this.client.respondActivityTaskCanceled(
            this.ops["RespondActivityTaskCanceled"].apply(partialParams)
        );
    }

    invokeRespondActivityTaskCompleted(partialParams: ToOptional<{
      [K in keyof RespondActivityTaskCompletedInput & keyof RespondActivityTaskCompletedInput & keyof RespondActivityTaskCompletedInput & keyof RespondActivityTaskCompletedInput & keyof RespondActivityTaskCompletedInput]: (RespondActivityTaskCompletedInput & RespondActivityTaskCompletedInput & RespondActivityTaskCompletedInput & RespondActivityTaskCompletedInput & RespondActivityTaskCompletedInput)[K]
    }>): void {
        return this.client.respondActivityTaskCompleted(
            this.ops["RespondActivityTaskCompleted"].apply(partialParams)
        );
    }

    invokeRespondActivityTaskFailed(partialParams: ToOptional<{
      [K in keyof RespondActivityTaskFailedInput & keyof RespondActivityTaskFailedInput & keyof RespondActivityTaskFailedInput & keyof RespondActivityTaskFailedInput & keyof RespondActivityTaskFailedInput]: (RespondActivityTaskFailedInput & RespondActivityTaskFailedInput & RespondActivityTaskFailedInput & RespondActivityTaskFailedInput & RespondActivityTaskFailedInput)[K]
    }>): void {
        return this.client.respondActivityTaskFailed(
            this.ops["RespondActivityTaskFailed"].apply(partialParams)
        );
    }

    invokeRespondDecisionTaskCompleted(partialParams: ToOptional<{
      [K in keyof RespondDecisionTaskCompletedInput & keyof RespondDecisionTaskCompletedInput & keyof RespondDecisionTaskCompletedInput & keyof RespondDecisionTaskCompletedInput & keyof RespondDecisionTaskCompletedInput]: (RespondDecisionTaskCompletedInput & RespondDecisionTaskCompletedInput & RespondDecisionTaskCompletedInput & RespondDecisionTaskCompletedInput & RespondDecisionTaskCompletedInput)[K]
    }>): void {
        return this.client.respondDecisionTaskCompleted(
            this.ops["RespondDecisionTaskCompleted"].apply(partialParams)
        );
    }

    invokeSignalWorkflowExecution(partialParams: ToOptional<{
      [K in keyof SignalWorkflowExecutionInput & keyof SignalWorkflowExecutionInput & keyof SignalWorkflowExecutionInput & keyof SignalWorkflowExecutionInput & keyof SignalWorkflowExecutionInput]: (SignalWorkflowExecutionInput & SignalWorkflowExecutionInput & SignalWorkflowExecutionInput & SignalWorkflowExecutionInput & SignalWorkflowExecutionInput)[K]
    }>): void {
        return this.client.signalWorkflowExecution(
            this.ops["SignalWorkflowExecution"].apply(partialParams)
        );
    }

    invokeStartWorkflowExecution(partialParams: ToOptional<{
      [K in keyof StartWorkflowExecutionInput & keyof StartWorkflowExecutionInput & keyof StartWorkflowExecutionInput & keyof StartWorkflowExecutionInput & keyof StartWorkflowExecutionInput]: (StartWorkflowExecutionInput & StartWorkflowExecutionInput & StartWorkflowExecutionInput & StartWorkflowExecutionInput & StartWorkflowExecutionInput)[K]
    }>): Run {
        return this.client.startWorkflowExecution(
            this.ops["StartWorkflowExecution"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof Omit<TagResourceInput, "resourceArn"> & keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput]: (Omit<TagResourceInput, "resourceArn"> & TagResourceInput & TagResourceInput & TagResourceInput & TagResourceInput)[K]
    }>): void {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeTerminateWorkflowExecution(partialParams: ToOptional<{
      [K in keyof TerminateWorkflowExecutionInput & keyof TerminateWorkflowExecutionInput & keyof TerminateWorkflowExecutionInput & keyof TerminateWorkflowExecutionInput & keyof TerminateWorkflowExecutionInput]: (TerminateWorkflowExecutionInput & TerminateWorkflowExecutionInput & TerminateWorkflowExecutionInput & TerminateWorkflowExecutionInput & TerminateWorkflowExecutionInput)[K]
    }>): void {
        return this.client.terminateWorkflowExecution(
            this.ops["TerminateWorkflowExecution"].apply(partialParams)
        );
    }

    invokeUndeprecateActivityType(partialParams: ToOptional<{
      [K in keyof UndeprecateActivityTypeInput & keyof UndeprecateActivityTypeInput & keyof UndeprecateActivityTypeInput & keyof UndeprecateActivityTypeInput & keyof UndeprecateActivityTypeInput]: (UndeprecateActivityTypeInput & UndeprecateActivityTypeInput & UndeprecateActivityTypeInput & UndeprecateActivityTypeInput & UndeprecateActivityTypeInput)[K]
    }>): void {
        return this.client.undeprecateActivityType(
            this.ops["UndeprecateActivityType"].apply(partialParams)
        );
    }

    invokeUndeprecateDomain(partialParams: ToOptional<{
      [K in keyof UndeprecateDomainInput & keyof UndeprecateDomainInput & keyof Omit<UndeprecateDomainInput, "name"> & keyof UndeprecateDomainInput & keyof UndeprecateDomainInput]: (UndeprecateDomainInput & UndeprecateDomainInput & Omit<UndeprecateDomainInput, "name"> & UndeprecateDomainInput & UndeprecateDomainInput)[K]
    }>): void {
        return this.client.undeprecateDomain(
            this.ops["UndeprecateDomain"].apply(partialParams)
        );
    }

    invokeUndeprecateWorkflowType(partialParams: ToOptional<{
      [K in keyof UndeprecateWorkflowTypeInput & keyof UndeprecateWorkflowTypeInput & keyof UndeprecateWorkflowTypeInput & keyof UndeprecateWorkflowTypeInput & keyof UndeprecateWorkflowTypeInput]: (UndeprecateWorkflowTypeInput & UndeprecateWorkflowTypeInput & UndeprecateWorkflowTypeInput & UndeprecateWorkflowTypeInput & UndeprecateWorkflowTypeInput)[K]
    }>): void {
        return this.client.undeprecateWorkflowType(
            this.ops["UndeprecateWorkflowType"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof Omit<UntagResourceInput, "resourceArn"> & keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput]: (Omit<UntagResourceInput, "resourceArn"> & UntagResourceInput & UntagResourceInput & UntagResourceInput & UntagResourceInput)[K]
    }>): void {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }
}