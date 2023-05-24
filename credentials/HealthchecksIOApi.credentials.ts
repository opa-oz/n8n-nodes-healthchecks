import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class HealthchecksIOApi implements ICredentialType {
	name = 'healthchecksIOApi';
	displayName = 'Healthchecksio API';
	icon = "file:logo.svg";
	documentationUrl = 'https://healthchecks.io/docs/';
	properties: INodeProperties[] = [
		{
			displayName: 'Domain',
			name: 'domain',
			type: 'string',
			default: 'https://healthchecks.io',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'X-Custom-Header': 'n8n-ndoes-healthchecksio'
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials?.domain}}',
			url: '/ping',
		},
	};
}
