
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AcceptInvitationRequest,
    ArchiveFindingsRequest,
    CreateDetectorRequest,
    CreateFilterRequest,
    CreateIPSetRequest,
    CreateMembersRequest,
    CreatePublishingDestinationRequest,
    CreateSampleFindingsRequest,
    CreateThreatIntelSetRequest,
    DeclineInvitationsRequest,
    DeleteDetectorRequest,
    DeleteFilterRequest,
    DeleteIPSetRequest,
    DeleteInvitationsRequest,
    DeleteMembersRequest,
    DeletePublishingDestinationRequest,
    DeleteThreatIntelSetRequest,
    DescribeOrganizationConfigurationRequest,
    DescribePublishingDestinationRequest,
    DisableOrganizationAdminAccountRequest,
    DisassociateFromMasterAccountRequest,
    DisassociateMembersRequest,
    EnableOrganizationAdminAccountRequest,
    GetDetectorRequest,
    GetFilterRequest,
    GetFindingsRequest,
    GetFindingsStatisticsRequest,
    GetIPSetRequest,
    GetMasterAccountRequest,
    GetMemberDetectorsRequest,
    GetMembersRequest,
    GetThreatIntelSetRequest,
    GetUsageStatisticsRequest,
    InviteMembersRequest,
    ListFiltersRequest,
    ListFindingsRequest,
    ListIPSetsRequest,
    ListMembersRequest,
    ListPublishingDestinationsRequest,
    ListTagsForResourceRequest,
    ListThreatIntelSetsRequest,
    StartMonitoringMembersRequest,
    StopMonitoringMembersRequest,
    TagResourceRequest,
    UnarchiveFindingsRequest,
    UntagResourceRequest,
    UpdateDetectorRequest,
    UpdateFilterRequest,
    UpdateFindingsFeedbackRequest,
    UpdateIPSetRequest,
    UpdateMemberDetectorsRequest,
    UpdateOrganizationConfigurationRequest,
    UpdatePublishingDestinationRequest,
    UpdateThreatIntelSetRequest,
    AcceptInvitationResponse,
    ArchiveFindingsResponse,
    CreateDetectorResponse,
    CreateFilterResponse,
    CreateIPSetResponse,
    CreateMembersResponse,
    CreatePublishingDestinationResponse,
    CreateSampleFindingsResponse,
    CreateThreatIntelSetResponse,
    DeclineInvitationsResponse,
    DeleteDetectorResponse,
    DeleteFilterResponse,
    DeleteIPSetResponse,
    DeleteInvitationsResponse,
    DeleteMembersResponse,
    DeletePublishingDestinationResponse,
    DeleteThreatIntelSetResponse,
    DescribeOrganizationConfigurationResponse,
    DescribePublishingDestinationResponse,
    DisableOrganizationAdminAccountResponse,
    DisassociateFromMasterAccountResponse,
    DisassociateMembersResponse,
    EnableOrganizationAdminAccountResponse,
    GetDetectorResponse,
    GetFilterResponse,
    GetFindingsResponse,
    GetFindingsStatisticsResponse,
    GetIPSetResponse,
    GetMasterAccountResponse,
    GetMemberDetectorsResponse,
    GetMembersResponse,
    GetThreatIntelSetResponse,
    GetUsageStatisticsResponse,
    InviteMembersResponse,
    ListFiltersResponse,
    ListFindingsResponse,
    ListIPSetsResponse,
    ListMembersResponse,
    ListPublishingDestinationsResponse,
    ListTagsForResourceResponse,
    ListThreatIntelSetsResponse,
    StartMonitoringMembersResponse,
    StopMonitoringMembersResponse,
    TagResourceResponse,
    UnarchiveFindingsResponse,
    UntagResourceResponse,
    UpdateDetectorResponse,
    UpdateFilterResponse,
    UpdateFindingsFeedbackResponse,
    UpdateIPSetResponse,
    UpdateMemberDetectorsResponse,
    UpdateOrganizationConfigurationResponse,
    UpdatePublishingDestinationResponse,
    UpdateThreatIntelSetResponse
} from "aws-sdk/clients/guardduty";
const schema = require("../apis/guardduty-2017-11-28.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.guardduty.PublishingDestination {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.guardduty.PublishingDestination>) {
        super(...args)
        this.client = new awssdk.GuardDuty()
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

    invokeAcceptInvitation(partialParams: ToOptional<{
      [K in keyof AcceptInvitationRequest & keyof AcceptInvitationRequest & keyof AcceptInvitationRequest & keyof AcceptInvitationRequest]: (AcceptInvitationRequest & AcceptInvitationRequest & AcceptInvitationRequest & AcceptInvitationRequest)[K]
    }>): Request<AcceptInvitationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.acceptInvitation(
          this.ops["AcceptInvitation"].applicator.apply(partialParams)
        );
    }

    invokeArchiveFindings(partialParams: ToOptional<{
      [K in keyof ArchiveFindingsRequest & keyof ArchiveFindingsRequest & keyof ArchiveFindingsRequest & keyof ArchiveFindingsRequest]: (ArchiveFindingsRequest & ArchiveFindingsRequest & ArchiveFindingsRequest & ArchiveFindingsRequest)[K]
    }>): Request<ArchiveFindingsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.archiveFindings(
          this.ops["ArchiveFindings"].applicator.apply(partialParams)
        );
    }

    invokeCreateDetector(partialParams: ToOptional<{
      [K in keyof CreateDetectorRequest & keyof CreateDetectorRequest & keyof CreateDetectorRequest & keyof CreateDetectorRequest]: (CreateDetectorRequest & CreateDetectorRequest & CreateDetectorRequest & CreateDetectorRequest)[K]
    }>): Request<CreateDetectorResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDetector(
          this.ops["CreateDetector"].applicator.apply(partialParams)
        );
    }

    invokeCreateFilter(partialParams: ToOptional<{
      [K in keyof CreateFilterRequest & keyof CreateFilterRequest & keyof CreateFilterRequest & keyof CreateFilterRequest]: (CreateFilterRequest & CreateFilterRequest & CreateFilterRequest & CreateFilterRequest)[K]
    }>): Request<CreateFilterResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createFilter(
          this.ops["CreateFilter"].applicator.apply(partialParams)
        );
    }

    invokeCreateIPSet(partialParams: ToOptional<{
      [K in keyof CreateIPSetRequest & keyof CreateIPSetRequest & keyof CreateIPSetRequest & keyof CreateIPSetRequest]: (CreateIPSetRequest & CreateIPSetRequest & CreateIPSetRequest & CreateIPSetRequest)[K]
    }>): Request<CreateIPSetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createIPSet(
          this.ops["CreateIPSet"].applicator.apply(partialParams)
        );
    }

    invokeCreateMembers(partialParams: ToOptional<{
      [K in keyof CreateMembersRequest & keyof CreateMembersRequest & keyof CreateMembersRequest & keyof CreateMembersRequest]: (CreateMembersRequest & CreateMembersRequest & CreateMembersRequest & CreateMembersRequest)[K]
    }>): Request<CreateMembersResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createMembers(
          this.ops["CreateMembers"].applicator.apply(partialParams)
        );
    }

    invokeCreatePublishingDestination(partialParams: ToOptional<{
      [K in keyof CreatePublishingDestinationRequest & keyof CreatePublishingDestinationRequest & keyof CreatePublishingDestinationRequest & keyof CreatePublishingDestinationRequest]: (CreatePublishingDestinationRequest & CreatePublishingDestinationRequest & CreatePublishingDestinationRequest & CreatePublishingDestinationRequest)[K]
    }>): Request<CreatePublishingDestinationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createPublishingDestination(
          this.ops["CreatePublishingDestination"].applicator.apply(partialParams)
        );
    }

    invokeCreateSampleFindings(partialParams: ToOptional<{
      [K in keyof CreateSampleFindingsRequest & keyof CreateSampleFindingsRequest & keyof CreateSampleFindingsRequest & keyof CreateSampleFindingsRequest]: (CreateSampleFindingsRequest & CreateSampleFindingsRequest & CreateSampleFindingsRequest & CreateSampleFindingsRequest)[K]
    }>): Request<CreateSampleFindingsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createSampleFindings(
          this.ops["CreateSampleFindings"].applicator.apply(partialParams)
        );
    }

    invokeCreateThreatIntelSet(partialParams: ToOptional<{
      [K in keyof CreateThreatIntelSetRequest & keyof CreateThreatIntelSetRequest & keyof CreateThreatIntelSetRequest & keyof CreateThreatIntelSetRequest]: (CreateThreatIntelSetRequest & CreateThreatIntelSetRequest & CreateThreatIntelSetRequest & CreateThreatIntelSetRequest)[K]
    }>): Request<CreateThreatIntelSetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createThreatIntelSet(
          this.ops["CreateThreatIntelSet"].applicator.apply(partialParams)
        );
    }

    invokeDeclineInvitations(partialParams: ToOptional<{
      [K in keyof DeclineInvitationsRequest & keyof DeclineInvitationsRequest & keyof DeclineInvitationsRequest & keyof DeclineInvitationsRequest]: (DeclineInvitationsRequest & DeclineInvitationsRequest & DeclineInvitationsRequest & DeclineInvitationsRequest)[K]
    }>): Request<DeclineInvitationsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.declineInvitations(
          this.ops["DeclineInvitations"].applicator.apply(partialParams)
        );
    }

    invokeDeleteDetector(partialParams: ToOptional<{
      [K in keyof DeleteDetectorRequest & keyof DeleteDetectorRequest & keyof DeleteDetectorRequest & keyof DeleteDetectorRequest]: (DeleteDetectorRequest & DeleteDetectorRequest & DeleteDetectorRequest & DeleteDetectorRequest)[K]
    }>): Request<DeleteDetectorResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDetector(
          this.ops["DeleteDetector"].applicator.apply(partialParams)
        );
    }

    invokeDeleteFilter(partialParams: ToOptional<{
      [K in keyof DeleteFilterRequest & keyof DeleteFilterRequest & keyof DeleteFilterRequest & keyof DeleteFilterRequest]: (DeleteFilterRequest & DeleteFilterRequest & DeleteFilterRequest & DeleteFilterRequest)[K]
    }>): Request<DeleteFilterResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteFilter(
          this.ops["DeleteFilter"].applicator.apply(partialParams)
        );
    }

    invokeDeleteIPSet(partialParams: ToOptional<{
      [K in keyof DeleteIPSetRequest & keyof DeleteIPSetRequest & keyof DeleteIPSetRequest & keyof DeleteIPSetRequest]: (DeleteIPSetRequest & DeleteIPSetRequest & DeleteIPSetRequest & DeleteIPSetRequest)[K]
    }>): Request<DeleteIPSetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteIPSet(
          this.ops["DeleteIPSet"].applicator.apply(partialParams)
        );
    }

    invokeDeleteInvitations(partialParams: ToOptional<{
      [K in keyof DeleteInvitationsRequest & keyof DeleteInvitationsRequest & keyof DeleteInvitationsRequest & keyof DeleteInvitationsRequest]: (DeleteInvitationsRequest & DeleteInvitationsRequest & DeleteInvitationsRequest & DeleteInvitationsRequest)[K]
    }>): Request<DeleteInvitationsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteInvitations(
          this.ops["DeleteInvitations"].applicator.apply(partialParams)
        );
    }

    invokeDeleteMembers(partialParams: ToOptional<{
      [K in keyof DeleteMembersRequest & keyof DeleteMembersRequest & keyof DeleteMembersRequest & keyof DeleteMembersRequest]: (DeleteMembersRequest & DeleteMembersRequest & DeleteMembersRequest & DeleteMembersRequest)[K]
    }>): Request<DeleteMembersResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteMembers(
          this.ops["DeleteMembers"].applicator.apply(partialParams)
        );
    }

    invokeDeletePublishingDestination(partialParams: ToOptional<{
      [K in keyof DeletePublishingDestinationRequest & keyof DeletePublishingDestinationRequest & keyof DeletePublishingDestinationRequest & keyof DeletePublishingDestinationRequest]: (DeletePublishingDestinationRequest & DeletePublishingDestinationRequest & DeletePublishingDestinationRequest & DeletePublishingDestinationRequest)[K]
    }>): Request<DeletePublishingDestinationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deletePublishingDestination(
          this.ops["DeletePublishingDestination"].applicator.apply(partialParams)
        );
    }

    invokeDeleteThreatIntelSet(partialParams: ToOptional<{
      [K in keyof DeleteThreatIntelSetRequest & keyof DeleteThreatIntelSetRequest & keyof DeleteThreatIntelSetRequest & keyof DeleteThreatIntelSetRequest]: (DeleteThreatIntelSetRequest & DeleteThreatIntelSetRequest & DeleteThreatIntelSetRequest & DeleteThreatIntelSetRequest)[K]
    }>): Request<DeleteThreatIntelSetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteThreatIntelSet(
          this.ops["DeleteThreatIntelSet"].applicator.apply(partialParams)
        );
    }

    invokeDescribeOrganizationConfiguration(partialParams: ToOptional<{
      [K in keyof DescribeOrganizationConfigurationRequest & keyof DescribeOrganizationConfigurationRequest & keyof DescribeOrganizationConfigurationRequest & keyof DescribeOrganizationConfigurationRequest]: (DescribeOrganizationConfigurationRequest & DescribeOrganizationConfigurationRequest & DescribeOrganizationConfigurationRequest & DescribeOrganizationConfigurationRequest)[K]
    }>): Request<DescribeOrganizationConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeOrganizationConfiguration(
          this.ops["DescribeOrganizationConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeDescribePublishingDestination(partialParams: ToOptional<{
      [K in keyof DescribePublishingDestinationRequest & keyof DescribePublishingDestinationRequest & keyof DescribePublishingDestinationRequest & keyof DescribePublishingDestinationRequest]: (DescribePublishingDestinationRequest & DescribePublishingDestinationRequest & DescribePublishingDestinationRequest & DescribePublishingDestinationRequest)[K]
    }>): Request<DescribePublishingDestinationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describePublishingDestination(
          this.ops["DescribePublishingDestination"].applicator.apply(partialParams)
        );
    }

    invokeDisableOrganizationAdminAccount(partialParams: ToOptional<{
      [K in keyof DisableOrganizationAdminAccountRequest & keyof DisableOrganizationAdminAccountRequest & keyof DisableOrganizationAdminAccountRequest & keyof DisableOrganizationAdminAccountRequest]: (DisableOrganizationAdminAccountRequest & DisableOrganizationAdminAccountRequest & DisableOrganizationAdminAccountRequest & DisableOrganizationAdminAccountRequest)[K]
    }>): Request<DisableOrganizationAdminAccountResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disableOrganizationAdminAccount(
          this.ops["DisableOrganizationAdminAccount"].applicator.apply(partialParams)
        );
    }

    invokeDisassociateFromMasterAccount(partialParams: ToOptional<{
      [K in keyof DisassociateFromMasterAccountRequest & keyof DisassociateFromMasterAccountRequest & keyof Omit<DisassociateFromMasterAccountRequest, "DetectorId"> & keyof DisassociateFromMasterAccountRequest]: (DisassociateFromMasterAccountRequest & DisassociateFromMasterAccountRequest & Omit<DisassociateFromMasterAccountRequest, "DetectorId"> & DisassociateFromMasterAccountRequest)[K]
    }>): Request<DisassociateFromMasterAccountResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateFromMasterAccount(
          this.ops["DisassociateFromMasterAccount"].applicator.apply(partialParams)
        );
    }

    invokeDisassociateMembers(partialParams: ToOptional<{
      [K in keyof DisassociateMembersRequest & keyof DisassociateMembersRequest & keyof Omit<DisassociateMembersRequest, "DetectorId"> & keyof DisassociateMembersRequest]: (DisassociateMembersRequest & DisassociateMembersRequest & Omit<DisassociateMembersRequest, "DetectorId"> & DisassociateMembersRequest)[K]
    }>): Request<DisassociateMembersResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateMembers(
          this.ops["DisassociateMembers"].applicator.apply(partialParams)
        );
    }

    invokeEnableOrganizationAdminAccount(partialParams: ToOptional<{
      [K in keyof EnableOrganizationAdminAccountRequest & keyof EnableOrganizationAdminAccountRequest & keyof EnableOrganizationAdminAccountRequest & keyof EnableOrganizationAdminAccountRequest]: (EnableOrganizationAdminAccountRequest & EnableOrganizationAdminAccountRequest & EnableOrganizationAdminAccountRequest & EnableOrganizationAdminAccountRequest)[K]
    }>): Request<EnableOrganizationAdminAccountResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.enableOrganizationAdminAccount(
          this.ops["EnableOrganizationAdminAccount"].applicator.apply(partialParams)
        );
    }

    invokeGetDetector(partialParams: ToOptional<{
      [K in keyof GetDetectorRequest & keyof GetDetectorRequest & keyof Omit<GetDetectorRequest, "DetectorId"> & keyof GetDetectorRequest]: (GetDetectorRequest & GetDetectorRequest & Omit<GetDetectorRequest, "DetectorId"> & GetDetectorRequest)[K]
    }>): Request<GetDetectorResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDetector(
          this.ops["GetDetector"].applicator.apply(partialParams)
        );
    }

    invokeGetFilter(partialParams: ToOptional<{
      [K in keyof GetFilterRequest & keyof GetFilterRequest & keyof Omit<GetFilterRequest, "DetectorId"> & keyof GetFilterRequest]: (GetFilterRequest & GetFilterRequest & Omit<GetFilterRequest, "DetectorId"> & GetFilterRequest)[K]
    }>): Request<GetFilterResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getFilter(
          this.ops["GetFilter"].applicator.apply(partialParams)
        );
    }

    invokeGetFindings(partialParams: ToOptional<{
      [K in keyof GetFindingsRequest & keyof GetFindingsRequest & keyof Omit<GetFindingsRequest, "DetectorId"> & keyof GetFindingsRequest]: (GetFindingsRequest & GetFindingsRequest & Omit<GetFindingsRequest, "DetectorId"> & GetFindingsRequest)[K]
    }>): Request<GetFindingsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getFindings(
          this.ops["GetFindings"].applicator.apply(partialParams)
        );
    }

    invokeGetFindingsStatistics(partialParams: ToOptional<{
      [K in keyof GetFindingsStatisticsRequest & keyof GetFindingsStatisticsRequest & keyof Omit<GetFindingsStatisticsRequest, "DetectorId"> & keyof GetFindingsStatisticsRequest]: (GetFindingsStatisticsRequest & GetFindingsStatisticsRequest & Omit<GetFindingsStatisticsRequest, "DetectorId"> & GetFindingsStatisticsRequest)[K]
    }>): Request<GetFindingsStatisticsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getFindingsStatistics(
          this.ops["GetFindingsStatistics"].applicator.apply(partialParams)
        );
    }

    invokeGetIPSet(partialParams: ToOptional<{
      [K in keyof GetIPSetRequest & keyof GetIPSetRequest & keyof Omit<GetIPSetRequest, "DetectorId"> & keyof GetIPSetRequest]: (GetIPSetRequest & GetIPSetRequest & Omit<GetIPSetRequest, "DetectorId"> & GetIPSetRequest)[K]
    }>): Request<GetIPSetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getIPSet(
          this.ops["GetIPSet"].applicator.apply(partialParams)
        );
    }

    invokeGetMasterAccount(partialParams: ToOptional<{
      [K in keyof GetMasterAccountRequest & keyof GetMasterAccountRequest & keyof Omit<GetMasterAccountRequest, "DetectorId"> & keyof GetMasterAccountRequest]: (GetMasterAccountRequest & GetMasterAccountRequest & Omit<GetMasterAccountRequest, "DetectorId"> & GetMasterAccountRequest)[K]
    }>): Request<GetMasterAccountResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getMasterAccount(
          this.ops["GetMasterAccount"].applicator.apply(partialParams)
        );
    }

    invokeGetMemberDetectors(partialParams: ToOptional<{
      [K in keyof GetMemberDetectorsRequest & keyof GetMemberDetectorsRequest & keyof Omit<GetMemberDetectorsRequest, "DetectorId"> & keyof GetMemberDetectorsRequest]: (GetMemberDetectorsRequest & GetMemberDetectorsRequest & Omit<GetMemberDetectorsRequest, "DetectorId"> & GetMemberDetectorsRequest)[K]
    }>): Request<GetMemberDetectorsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getMemberDetectors(
          this.ops["GetMemberDetectors"].applicator.apply(partialParams)
        );
    }

    invokeGetMembers(partialParams: ToOptional<{
      [K in keyof GetMembersRequest & keyof GetMembersRequest & keyof Omit<GetMembersRequest, "DetectorId"> & keyof GetMembersRequest]: (GetMembersRequest & GetMembersRequest & Omit<GetMembersRequest, "DetectorId"> & GetMembersRequest)[K]
    }>): Request<GetMembersResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getMembers(
          this.ops["GetMembers"].applicator.apply(partialParams)
        );
    }

    invokeGetThreatIntelSet(partialParams: ToOptional<{
      [K in keyof GetThreatIntelSetRequest & keyof GetThreatIntelSetRequest & keyof Omit<GetThreatIntelSetRequest, "DetectorId"> & keyof GetThreatIntelSetRequest]: (GetThreatIntelSetRequest & GetThreatIntelSetRequest & Omit<GetThreatIntelSetRequest, "DetectorId"> & GetThreatIntelSetRequest)[K]
    }>): Request<GetThreatIntelSetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getThreatIntelSet(
          this.ops["GetThreatIntelSet"].applicator.apply(partialParams)
        );
    }

    invokeGetUsageStatistics(partialParams: ToOptional<{
      [K in keyof GetUsageStatisticsRequest & keyof GetUsageStatisticsRequest & keyof Omit<GetUsageStatisticsRequest, "DetectorId"> & keyof GetUsageStatisticsRequest]: (GetUsageStatisticsRequest & GetUsageStatisticsRequest & Omit<GetUsageStatisticsRequest, "DetectorId"> & GetUsageStatisticsRequest)[K]
    }>): Request<GetUsageStatisticsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getUsageStatistics(
          this.ops["GetUsageStatistics"].applicator.apply(partialParams)
        );
    }

    invokeInviteMembers(partialParams: ToOptional<{
      [K in keyof InviteMembersRequest & keyof InviteMembersRequest & keyof Omit<InviteMembersRequest, "DetectorId"> & keyof InviteMembersRequest]: (InviteMembersRequest & InviteMembersRequest & Omit<InviteMembersRequest, "DetectorId"> & InviteMembersRequest)[K]
    }>): Request<InviteMembersResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.inviteMembers(
          this.ops["InviteMembers"].applicator.apply(partialParams)
        );
    }

    invokeListFilters(partialParams: ToOptional<{
      [K in keyof ListFiltersRequest & keyof ListFiltersRequest & keyof Omit<ListFiltersRequest, "DetectorId"> & keyof ListFiltersRequest]: (ListFiltersRequest & ListFiltersRequest & Omit<ListFiltersRequest, "DetectorId"> & ListFiltersRequest)[K]
    }>): Request<ListFiltersResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listFilters(
          this.ops["ListFilters"].applicator.apply(partialParams)
        );
    }

    invokeListFindings(partialParams: ToOptional<{
      [K in keyof ListFindingsRequest & keyof ListFindingsRequest & keyof Omit<ListFindingsRequest, "DetectorId"> & keyof ListFindingsRequest]: (ListFindingsRequest & ListFindingsRequest & Omit<ListFindingsRequest, "DetectorId"> & ListFindingsRequest)[K]
    }>): Request<ListFindingsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listFindings(
          this.ops["ListFindings"].applicator.apply(partialParams)
        );
    }

    invokeListIPSets(partialParams: ToOptional<{
      [K in keyof ListIPSetsRequest & keyof ListIPSetsRequest & keyof Omit<ListIPSetsRequest, "DetectorId"> & keyof ListIPSetsRequest]: (ListIPSetsRequest & ListIPSetsRequest & Omit<ListIPSetsRequest, "DetectorId"> & ListIPSetsRequest)[K]
    }>): Request<ListIPSetsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listIPSets(
          this.ops["ListIPSets"].applicator.apply(partialParams)
        );
    }

    invokeListMembers(partialParams: ToOptional<{
      [K in keyof ListMembersRequest & keyof ListMembersRequest & keyof Omit<ListMembersRequest, "DetectorId"> & keyof ListMembersRequest]: (ListMembersRequest & ListMembersRequest & Omit<ListMembersRequest, "DetectorId"> & ListMembersRequest)[K]
    }>): Request<ListMembersResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listMembers(
          this.ops["ListMembers"].applicator.apply(partialParams)
        );
    }

    invokeListPublishingDestinations(partialParams: ToOptional<{
      [K in keyof ListPublishingDestinationsRequest & keyof ListPublishingDestinationsRequest & keyof Omit<ListPublishingDestinationsRequest, "DetectorId"> & keyof ListPublishingDestinationsRequest]: (ListPublishingDestinationsRequest & ListPublishingDestinationsRequest & Omit<ListPublishingDestinationsRequest, "DetectorId"> & ListPublishingDestinationsRequest)[K]
    }>): Request<ListPublishingDestinationsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listPublishingDestinations(
          this.ops["ListPublishingDestinations"].applicator.apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].applicator.apply(partialParams)
        );
    }

    invokeListThreatIntelSets(partialParams: ToOptional<{
      [K in keyof ListThreatIntelSetsRequest & keyof ListThreatIntelSetsRequest & keyof Omit<ListThreatIntelSetsRequest, "DetectorId"> & keyof ListThreatIntelSetsRequest]: (ListThreatIntelSetsRequest & ListThreatIntelSetsRequest & Omit<ListThreatIntelSetsRequest, "DetectorId"> & ListThreatIntelSetsRequest)[K]
    }>): Request<ListThreatIntelSetsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listThreatIntelSets(
          this.ops["ListThreatIntelSets"].applicator.apply(partialParams)
        );
    }

    invokeStartMonitoringMembers(partialParams: ToOptional<{
      [K in keyof StartMonitoringMembersRequest & keyof StartMonitoringMembersRequest & keyof Omit<StartMonitoringMembersRequest, "DetectorId"> & keyof StartMonitoringMembersRequest]: (StartMonitoringMembersRequest & StartMonitoringMembersRequest & Omit<StartMonitoringMembersRequest, "DetectorId"> & StartMonitoringMembersRequest)[K]
    }>): Request<StartMonitoringMembersResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startMonitoringMembers(
          this.ops["StartMonitoringMembers"].applicator.apply(partialParams)
        );
    }

    invokeStopMonitoringMembers(partialParams: ToOptional<{
      [K in keyof StopMonitoringMembersRequest & keyof StopMonitoringMembersRequest & keyof Omit<StopMonitoringMembersRequest, "DetectorId"> & keyof StopMonitoringMembersRequest]: (StopMonitoringMembersRequest & StopMonitoringMembersRequest & Omit<StopMonitoringMembersRequest, "DetectorId"> & StopMonitoringMembersRequest)[K]
    }>): Request<StopMonitoringMembersResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopMonitoringMembers(
          this.ops["StopMonitoringMembers"].applicator.apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): Request<TagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].applicator.apply(partialParams)
        );
    }

    invokeUnarchiveFindings(partialParams: ToOptional<{
      [K in keyof UnarchiveFindingsRequest & keyof UnarchiveFindingsRequest & keyof Omit<UnarchiveFindingsRequest, "DetectorId"> & keyof UnarchiveFindingsRequest]: (UnarchiveFindingsRequest & UnarchiveFindingsRequest & Omit<UnarchiveFindingsRequest, "DetectorId"> & UnarchiveFindingsRequest)[K]
    }>): Request<UnarchiveFindingsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.unarchiveFindings(
          this.ops["UnarchiveFindings"].applicator.apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): Request<UntagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].applicator.apply(partialParams)
        );
    }

    invokeUpdateDetector(partialParams: ToOptional<{
      [K in keyof UpdateDetectorRequest & keyof UpdateDetectorRequest & keyof Omit<UpdateDetectorRequest, "DetectorId"> & keyof UpdateDetectorRequest]: (UpdateDetectorRequest & UpdateDetectorRequest & Omit<UpdateDetectorRequest, "DetectorId"> & UpdateDetectorRequest)[K]
    }>): Request<UpdateDetectorResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDetector(
          this.ops["UpdateDetector"].applicator.apply(partialParams)
        );
    }

    invokeUpdateFilter(partialParams: ToOptional<{
      [K in keyof UpdateFilterRequest & keyof UpdateFilterRequest & keyof Omit<UpdateFilterRequest, "DetectorId"> & keyof UpdateFilterRequest]: (UpdateFilterRequest & UpdateFilterRequest & Omit<UpdateFilterRequest, "DetectorId"> & UpdateFilterRequest)[K]
    }>): Request<UpdateFilterResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateFilter(
          this.ops["UpdateFilter"].applicator.apply(partialParams)
        );
    }

    invokeUpdateFindingsFeedback(partialParams: ToOptional<{
      [K in keyof UpdateFindingsFeedbackRequest & keyof UpdateFindingsFeedbackRequest & keyof Omit<UpdateFindingsFeedbackRequest, "DetectorId"> & keyof UpdateFindingsFeedbackRequest]: (UpdateFindingsFeedbackRequest & UpdateFindingsFeedbackRequest & Omit<UpdateFindingsFeedbackRequest, "DetectorId"> & UpdateFindingsFeedbackRequest)[K]
    }>): Request<UpdateFindingsFeedbackResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateFindingsFeedback(
          this.ops["UpdateFindingsFeedback"].applicator.apply(partialParams)
        );
    }

    invokeUpdateIPSet(partialParams: ToOptional<{
      [K in keyof UpdateIPSetRequest & keyof UpdateIPSetRequest & keyof Omit<UpdateIPSetRequest, "DetectorId"> & keyof UpdateIPSetRequest]: (UpdateIPSetRequest & UpdateIPSetRequest & Omit<UpdateIPSetRequest, "DetectorId"> & UpdateIPSetRequest)[K]
    }>): Request<UpdateIPSetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateIPSet(
          this.ops["UpdateIPSet"].applicator.apply(partialParams)
        );
    }

    invokeUpdateMemberDetectors(partialParams: ToOptional<{
      [K in keyof UpdateMemberDetectorsRequest & keyof UpdateMemberDetectorsRequest & keyof Omit<UpdateMemberDetectorsRequest, "DetectorId"> & keyof UpdateMemberDetectorsRequest]: (UpdateMemberDetectorsRequest & UpdateMemberDetectorsRequest & Omit<UpdateMemberDetectorsRequest, "DetectorId"> & UpdateMemberDetectorsRequest)[K]
    }>): Request<UpdateMemberDetectorsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateMemberDetectors(
          this.ops["UpdateMemberDetectors"].applicator.apply(partialParams)
        );
    }

    invokeUpdateOrganizationConfiguration(partialParams: ToOptional<{
      [K in keyof UpdateOrganizationConfigurationRequest & keyof UpdateOrganizationConfigurationRequest & keyof Omit<UpdateOrganizationConfigurationRequest, "DetectorId"> & keyof UpdateOrganizationConfigurationRequest]: (UpdateOrganizationConfigurationRequest & UpdateOrganizationConfigurationRequest & Omit<UpdateOrganizationConfigurationRequest, "DetectorId"> & UpdateOrganizationConfigurationRequest)[K]
    }>): Request<UpdateOrganizationConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateOrganizationConfiguration(
          this.ops["UpdateOrganizationConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeUpdatePublishingDestination(partialParams: ToOptional<{
      [K in keyof UpdatePublishingDestinationRequest & keyof UpdatePublishingDestinationRequest & keyof Omit<UpdatePublishingDestinationRequest, "DetectorId"> & keyof UpdatePublishingDestinationRequest]: (UpdatePublishingDestinationRequest & UpdatePublishingDestinationRequest & Omit<UpdatePublishingDestinationRequest, "DetectorId"> & UpdatePublishingDestinationRequest)[K]
    }>): Request<UpdatePublishingDestinationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updatePublishingDestination(
          this.ops["UpdatePublishingDestination"].applicator.apply(partialParams)
        );
    }

    invokeUpdateThreatIntelSet(partialParams: ToOptional<{
      [K in keyof UpdateThreatIntelSetRequest & keyof UpdateThreatIntelSetRequest & keyof Omit<UpdateThreatIntelSetRequest, "DetectorId"> & keyof UpdateThreatIntelSetRequest]: (UpdateThreatIntelSetRequest & UpdateThreatIntelSetRequest & Omit<UpdateThreatIntelSetRequest, "DetectorId"> & UpdateThreatIntelSetRequest)[K]
    }>): Request<UpdateThreatIntelSetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateThreatIntelSet(
          this.ops["UpdateThreatIntelSet"].applicator.apply(partialParams)
        );
    }
}