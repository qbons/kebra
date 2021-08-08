const settings = {
	name: 'EmployerBranding',
	state: {
		frontity: {
			url: 'https://eb2.demoapp.xyz/',
			title: 'Employer Branding',
			description:
				'WordPress Theme for Kalibrr Employer Branding'
		}
	},
	packages: [
		{
			name: 'kebra-theme'
		},
		{
			name: '@frontity/wp-source',
			state: {
				source: {
					url: 'https://eb2.demoapp.xyz/'
				}
			}
		},
		'@aamodtgroup/frontity-contact-form-7',
		'@frontity/tiny-router',
		'@frontity/html2react'
	]
};

export default settings;
