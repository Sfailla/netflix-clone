export default function randomAvatar() {
	const random = Math.floor(Math.random() * 5) + 1;
	return `${random}.png`;
}
