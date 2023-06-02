import React from 'react'
import './Personal.css'

const Personal = () => {
    return (
        <div className='ask-question'>
            <div className='ask-ques-container'>
                <h1>Profile</h1>
                <form>
                    <div className='ask-form-container'>
                        <label htmlFor='ask-ques-title'>
                            <h4>Age</h4>

                            <input type='text' id='ask-ques-title' placeholder='e.g. in years, months' />
                        </label>
                        <label htmlFor='ask-ques-body'>
                            <h4>About Yourself</h4>
                            <p>Include all the information someone would need to best describe your personality</p>
                            <textarea cols="30" rows="5" id='ask-ques-body' />
                        </label>
                        <label htmlFor='ask-ques-tags'>
                            <h4>Skills</h4>
                            <p>Mention your technical skills as well as soft skills</p>
                            <input type='text' id='ask-ques-tags' placeholder='e.g. (xml typescript wordpress)' />
                        </label>
                    </div>
                    <input type='submit' value='Review your question' className='review-btn' />
                </form>
            </div>
        </div>
    )
}

export default Personal