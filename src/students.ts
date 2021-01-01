
type SupportedSocials = "twitter" | "github" | "linkedin" | "website" | "telegram"

type Social = {
	twitter?: string,
	github?: string,
	linkedin?: string,
	website?: string,
	telegram?: string,
}

type Majors = "CS" | "IS" | "IT"

type Student = {
	name: string,
	major: Majors,
	title?: string,
	social?: Social,
}


const students: Student[] = [
	{
		name: "Ryan Samman",
		major: "CS",
		social: {
			twitter: "Ryan_Samman_",
			github: "RyanSamman",
			linkedin: "Ryan-Samman",
			website: "RyanSamman.com",
		}
	},
	{
		name: "Khaled AlAsmari",
		major: "CS",
		social: {
			twitter: "KhaledMAlasmari",
			linkedin: "khaled-alasmari-9971a31b4",
			github: "KhaledMAlasmari",
			website: "https://khaledmalasmari.github.io/",
		}
	},
	{
		name: "Abdulrahman AlGhazi",
		title: "Marketer & Designer",
		major: "IS",
	},
	{
		name: "Nawaf AlQattash",
		major: "IS",
	},
	{
		name: "Dedication",
		major: "IT",
	},
]

export default students;

export type {
	Social,
	Student,
	Majors,
	SupportedSocials,
}