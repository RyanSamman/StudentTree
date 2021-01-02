
type SupportedSocials = "twitter" | "github" | "linkedin" | "website" | "telegram"

type Social = {
	twitter?: string,
	github?: string,
	linkedin?: string,
	website?: string,
	telegram?: string,
}

type Majors = "CS" | "IS" | "IT"
type Years = "18" | "20"
type Student = {
	name: string,
	major: Majors,
	year: Years,
	title?: string,
	social?: Social,
}


const students: Student[] = [
	{
		name: "Ryan Samman",
		major: "CS",
		year: "20",
		social: {
			twitter: "Ryan_Samman_",
			github: "RyanSamman",
			linkedin: "Ryan-Samman",
			website: "RyanSamman.com"
		}
	},
	{
		name: "Khaled AlAsmari",
		major: "CS",
		year: "20",
		social: {
			twitter: "KhaledMAlasmari",
			linkedin: "khaled-alasmari-9971a31b4",
			github: "KhaledMAlasmari",
			website: "https://khaledmalasmari.github.io/"
		}
	},
	{
		name: "Abdulrahman AlGhazi",
		title: "Marketer & Designer",
		major: "IS",
		year: "20"
	},
	{
		name: "Nawaf AlQattash",
		major: "IS",
		year: "20"
	},
	{
		name: "Dedication",
		major: "IT",
		year: "20"
	},
	{
		name: "Abdulmajeed Alahmadi",
		major: "IT",
		year: "18",
		social: {
			github: "MjedAl"
		}
	}
]

export default students;

export type {
	Social,
	Student,
	Majors,
	Years,
	SupportedSocials,
}