import './Support.scss'
import {Image} from "minista";
import Field from "@/components/Field";
import Checkbox from "@/components/Checkbox";
import Button from "@/components/Button";


const Support = () => {
    const titleId = 'support-title';

    return (
        <section className="support container" aria-labelledby={titleId}>
            <div className="support__body">
                <div className="support__info" id={titleId}>
                    <h1 className="support_title h2">Welcome to our support page!</h1>
                </div>
                <div className="support__description">
                    <p>
                        We're here to help you with any problems you may be having with our product.
                    </p>
                </div>
                <Image className="support__image" src="/src/assets/images/support/1.png"/>
            </div>
            <div>
                <form className="support__form" action="">
                    <Field
                        className="support__form-cell"
                        label="First Name"
                        placeholder="John"
                        isRequired
                    />
                    <Field
                        className="support__form-cell"
                        label="Last Name"
                        placeholder="Libosky"
                    />
                    <Field
                        className="support__form-cell"
                        label="Email"
                        placeholder="example@example.com"
                        isRequired
                    />
                    <Field
                        className="support__form-cell"
                        label="Phone Number"
                        placeholder="(111) 222-33-44"
                        inputMode="tel"
                        mask="(000) 000-00-00"
                    />
                    <Field
                        className="support__form-cell support__form-cell--wide"
                        label="Message"
                        type="textarea"
                        placeholder="Hi! I have a question..."
                        isRequired
                    />
                    <div className="support__form-cell support__form-cell--wide support__form-cell--actions">
                        <Checkbox
                            className="support__form-agreement"
                            label="I agree with Terms of Use and Privacy Policy"
                            isRequired
                        />
                        <Button
                            clansName="support__form-submit-button"
                            label="Send message"
                            type="submit"
                        />
                    </div>

                </form>
            </div>
        </section>
    )
}

export default Support