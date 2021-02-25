import {React,useState} from 'react'
const commentsList = []

function Comments (componentID) {

    const [comment,setComment] = useState('')
    const latestList = commentsList.map((value)=>{
        <li>{value}</li>
     })

    const onCommentChange = (event) => {
        console.log("onCommentChange")
        setComment(event.target.value)
    }

    const setCommentsList = (comment) => {
        console.log("setCommentsList",commentsList)
        return commentsList.push(comment)
        
    }
    return(
        <div id={componentID} className="measure-width lh-copy pa5">
            <div>
                <label htmlFor="comment" className="f6 b db mb2 white-90">Let me know your comments</label>
                <textarea 
                    id="comment" name="comment" 
                    className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2 " 
                    aria-describedby="comment-desc" onChange={onCommentChange}>
                </textarea>
                <button onClick={() => {setCommentsList(comment)}} >Post Comment</button>
            </div>
            <small className="white-90">you can see all the reviews I got for this website below. let me know what you think about this website</small>
            <ul>
            {latestList}
            </ul>
        </div>
    );
}

export default Comments