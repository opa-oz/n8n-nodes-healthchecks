import { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { httpVerbFields, httpVerbOperations } from './HttpVerbDescription';

export class HealthchecksIO implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Healthchecks.io',
		name: 'healthchecksio',
		icon: 'file:logo.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Ping Healthchecks.io endpoint',
		defaults: {
			name: 'HealthchecksIO',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'healthchecksIOApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{$credentials?.domain}}',
			url: '',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Operation',
						value: 'ping',
					},
				],
				default: 'ping',
			},

			...httpVerbOperations,
			...httpVerbFields,
		],
	};
}
