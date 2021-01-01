import GitHubIcon from './../icons/github.svg'
import TwitterIcon from './../icons/twitter.svg'
import TelegramIcon from './../icons/telegram.svg'
import WebsiteIcon from './../icons/website.svg'
import LinkedInIcon from './../icons/linkedin.svg'
import UnknownIcon from './../icons/unknown.svg'

function mapToIcon(type: string, data: string | undefined) {
	let icon = UnknownIcon

	let link = `https://${data}`

	switch (type) {
		case "twitter":
			link = `https://twitter.com/${data}`
			icon = TwitterIcon
			break;
		case "linkedin":
			link = `https://www.linkedin.com/in/${data}/`
			icon = LinkedInIcon
			break;
		case "github":
			link = `https://github.com/${data}`
			icon = GitHubIcon
			break;
		case "telegram":
			icon = TelegramIcon
			break;
		case "website":
			icon = WebsiteIcon
			link = `${data}`
			break;
	}


	return (
		<div key={type}>
			<a href={link} rel="noreferrer" target="_blank">
				<img src={icon} alt="test" />
			</a>
		</div>
	)
}

const util = {
	mapToIcon,
}

export default util