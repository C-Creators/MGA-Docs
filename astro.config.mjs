// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'MyGPTAssistants Documentation',
			description: 'Complete guide to MyGPTAssistants platform - AI Assistants and CRM tools',
			logo: {
				src: './src/assets/logo.svg',
				alt: 'MyGPTAssistants'
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/C-Creators/mygptassistants' },
			],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Introduction', slug: 'getting-started/introduction' },
						{ label: 'Platform Overview', slug: 'getting-started/platform-overview' },
						{ label: 'Quick Start', slug: 'getting-started/quick-start' },
					],
				},
				{
					label: 'AI Assistants',
					items: [
						{ label: 'Playground', slug: 'assistants/playground' },
						{ label: 'Appearance & Branding', slug: 'assistants/appearance' },
						{ label: 'Integrations', slug: 'assistants/integrations' },
						{ label: 'Analytics', slug: 'assistants/analytics' },
						{ label: 'Conversations', slug: 'assistants/conversations' },
						{ label: 'Settings', slug: 'assistants/settings' },
						
						{ label: 'Data Sources', slug: 'assistants/data-sources' },
						{ label: 'Plugins', slug: 'assistants/plugins' },
						{ label: 'Search', slug: 'assistants/search' },
						{ label: 'Embed', slug: 'assistants/embed' },
					],
				},
				{
					label: 'CRM System',
					items: [
						{ label: 'CRM Overview', slug: 'crm/overview' },
						{ label: 'Contacts', slug: 'crm/contacts' },
						{ label: 'Segments', slug: 'crm/segments' },
						{ label: 'Campaigns', slug: 'crm/campaigns' },
						{ label: 'Workflows', slug: 'crm/workflows' },
						{ label: 'Tickets', slug: 'crm/tickets' },
						{ label: 'Reports', slug: 'crm/reports' },
					],
				},
			],
			editLink: {
				baseUrl: 'https://github.com/C-Creators/mygptassistants/edit/main/docs-site/',
			},
		}),
	],
});
