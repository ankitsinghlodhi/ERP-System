export default function ({ back }) {
    return (
        <div>
        <div className="chat-section">
             <div className="chat-header">OIST IT</div>
             <div className="chat-box" id="chatBox">
              <div className="message received">Hi, have you checked today's assignment?</div>
              <div className="message sent">Yes, I submitted it this morning.</div>
              <div className="message received">Great! Let's prepare for the test too.</div>
             <div className="message sent">Sure, let's discuss it after className.</div>
        </div>
        <div className="input-area">
             <input type="text" placeholder="Type a message..." />
             <button>Send</button>
              <button onClick={back} >back</button>
        </div>
        </div>
         </div>
    )
}