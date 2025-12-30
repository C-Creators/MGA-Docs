// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.mygptassistants.com',
	server: {
		port: 4329, // Uncommon port to avoid conflicts with other local apps
	},
	integrations: [
		starlight({
			title: 'MyGPTAssistants Documentation',
			description: 'Complete guide to MyGPTAssistants platform - AI Assistants and CRM tools',
			logo: {
				light: './src/assets/mga-logo.png',
				dark: './src/assets/mga-logo-light.png',
				replacesTitle: true,
			},
			// Custom theme matching MyGPTAssistants app
			customCss: ['./src/styles/custom.css'],
			// i18n configuration - English (root) and Spanish
			// Using root locale so English pages serve at / without prefix
			locales: {
				root: { label: 'English', lang: 'en' },
				es: { label: 'Español', lang: 'es' },
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/C-Creators/mygptassistants' },
			],
			sidebar: [
				{
					label: 'Assistants',
					items: [
						{ slug: 'assistants/overview', label: 'Overview' },
						{ slug: 'assistants/playground' },
						{ slug: 'assistants/appearance' },
						{ slug: 'assistants/integrations' },
						{ slug: 'assistants/analytics' },
						{ slug: 'assistants/conversations' },
						{ slug: 'assistants/settings' },
						{ slug: 'assistants/data-sources' },
						{ slug: 'assistants/plugins' },
						{ slug: 'assistants/search' },
						{ slug: 'assistants/embed' },
					],
				},
				{
					label: 'CRM',
					items: [
						{ slug: 'crm/overview', label: 'Overview' },
						{ slug: 'crm/contacts' },
						{ slug: 'crm/segments' },
						{ slug: 'crm/pipelines' },
						{ slug: 'crm/workflows' },
						{ slug: 'crm/reports' },
					],
				},
				{
					label: 'API Reference',
					items: [
						{ slug: 'api/overview', label: 'Overview' },
						{ slug: 'api/authentication' },
						{ slug: 'api/chat-api' },
						{ slug: 'api/webhooks' },
					],
				},
				{
					label: 'Legal',
					items: [
						{ slug: 'legal/overview', label: 'Overview' },
						{ slug: 'legal/terms-of-service' },
						{ slug: 'legal/privacy-policy' },
						{ slug: 'legal/data-protection' },
					],
				},
			],
		}),
	],
});
