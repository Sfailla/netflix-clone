import React from 'react';
import { Footer } from '../components';

export default function FooterContainer() {
	return (
		<Footer>
			<Footer.Card>
				<Footer.Row>
					<Footer.Column>
						<Footer.Title>Questions? contact us</Footer.Title>
						<Footer.Break />
						<Footer.Link href="#">FAQ</Footer.Link>
						<Footer.Link href="#">Investor Relations</Footer.Link>
						<Footer.Link href="#">Ways to Watch</Footer.Link>
						<Footer.Link href="#">Coporate Information</Footer.Link>
						<Footer.Link href="#">Netflix Originals</Footer.Link>
						<Footer.Link href="#">Help Center</Footer.Link>
						<Footer.Link href="#">Jobs</Footer.Link>
						<Footer.Link href="#">Terms of Use</Footer.Link>
						<Footer.Link href="#">Contact Us</Footer.Link>
						<Footer.Link href="#">Account</Footer.Link>
						<Footer.Link href="#">Redeem Gift Cards</Footer.Link>
						<Footer.Link href="#">Privacy</Footer.Link>
						<Footer.Link href="#">Speed Test</Footer.Link>
						<Footer.Link href="#">Media Center</Footer.Link>
						<Footer.Link href="#">Buy Gift Cards</Footer.Link>
						<Footer.Link href="#">Cookie Preferences</Footer.Link>
						<Footer.Link href="#">Legal Notices</Footer.Link>
						<Footer.Language>
							<Footer.Wrapper>
								<Footer.Svg
									globe={true}
									viewBox="0 0 32 32"
									d="M22.658 10.988h5.172c0.693 1.541 1.107 3.229 1.178 5.012h-5.934c-0.025-1.884-0.181-3.544-0.416-5.012zM20.398 3.896c2.967 1.153 5.402 3.335 6.928 6.090h-4.836c-0.549-2.805-1.383-4.799-2.092-6.090zM16.068 9.986v-6.996c1.066 0.047 2.102 0.216 3.092 0.493 0.75 1.263 1.719 3.372 2.33 6.503h-5.422zM9.489 22.014c-0.234-1.469-0.396-3.119-0.421-5.012h5.998v5.012h-5.577zM9.479 10.988h5.587v5.012h-6.004c0.025-1.886 0.183-3.543 0.417-5.012zM11.988 3.461c0.987-0.266 2.015-0.435 3.078-0.469v6.994h-5.422c0.615-3.148 1.591-5.265 2.344-6.525zM3.661 9.986c1.551-2.8 4.062-4.993 7.096-6.131-0.715 1.29-1.559 3.295-2.114 6.131h-4.982zM8.060 16h-6.060c0.066-1.781 0.467-3.474 1.158-5.012h5.316c-0.233 1.469-0.39 3.128-0.414 5.012zM8.487 22.014h-5.29c-0.694-1.543-1.139-3.224-1.204-5.012h6.071c0.024 1.893 0.188 3.541 0.423 5.012zM8.651 23.016c0.559 2.864 1.416 4.867 2.134 6.142-3.045-1.133-5.557-3.335-7.11-6.142h4.976zM15.066 23.016v6.994c-1.052-0.033-2.067-0.199-3.045-0.46-0.755-1.236-1.736-3.363-2.356-6.534h5.401zM21.471 23.016c-0.617 3.152-1.592 5.271-2.344 6.512-0.979 0.271-2.006 0.418-3.059 0.465v-6.977h5.403zM16.068 17.002h5.998c-0.023 1.893-0.188 3.542-0.422 5.012h-5.576v-5.012zM22.072 16h-6.004v-5.012h5.586c0.235 1.469 0.393 3.126 0.418 5.012zM23.070 17.002h5.926c-0.066 1.787-0.506 3.468-1.197 5.012h-5.152c0.234-1.471 0.398-3.119 0.423-5.012zM27.318 23.016c-1.521 2.766-3.967 4.949-6.947 6.1 0.715-1.276 1.561-3.266 2.113-6.1h4.834z"
								/>
								<Footer.Select>
									<Footer.Option>English</Footer.Option>
									<Footer.Option>Espanol</Footer.Option>
								</Footer.Select>
								<Footer.Svg
									viewBox="0 0 24 24"
									d="M7.406 8.578l4.594 4.594 4.594-4.594 1.406 1.406-6 6-6-6z"
								/>
							</Footer.Wrapper>
						</Footer.Language>
					</Footer.Column>
				</Footer.Row>
			</Footer.Card>
		</Footer>
	);
}
