import React from 'react'

const Comments = ({componentID}) => {
    return(
        <div id={componentID} className="measure-width lh-copy pa5">
            <form className="pa4 black-80">
            <div>
                <label for="comment" className="f6 b db mb2 white-90">Let me know your comments</label>
                <textarea id="comment" name="comment" className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2 " aria-describedby="comment-desc"></textarea>
            </div>
            <small class="white-90">you can see all the reviews I got for this website below. let me know what you think about this website</small>
            </form>
        </div>
    );
}

export default Comments