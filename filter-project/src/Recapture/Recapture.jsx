import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Recapture = () => {
    const [verified,setVerified] = useState(false)
    const onChange = (value) =>{
        setVerified(true)
        console.log("Captcha value:", value)
    }
    return (
        <div className='px-20 py-8'>
            <h2 className='text-center font-semibold text-4xl'>Recapture form Email</h2>

            <div className="py-12">
                <form className="space-y-3">
                    <input className="w-full py-2 px-4 border" type="text" placeholder="Enter Name" />
                    <input className="w-full py-2 px-4 border" type="password" placeholder="Enter Password" />
                    <div>
                        <ReCAPTCHA
                            sitekey="6LeZk8woAAAAAMXvaMSrTrjuOvzIfhxqbZLoe2eB"
                            onChange={onChange}
                        />
                    </div>
                    <button type="submit" className="w-full hover:bg-[yellow] duration-300 py-2 px-4 bg-[red] text-white" disabled={!verified}>
                    Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Recapture;