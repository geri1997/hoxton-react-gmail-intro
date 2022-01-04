import './Reply.css'

function Reply() {
  return (
    <section className="reply">
      <img
        src="src\assets\icons\download-button.png"
        alt=""
        className="profile-pic"
      />
      <div className="reply">
        <div className="subject">
          <img src="src\assets\icons\back-arrow.png" alt="" />
          <p className="send-to">Freepik Company (no-reply@freepik.com)</p>
          <img src="src\assets\icons\rate-star-button.png" alt="" className="new-tab" />
        </div>
        <textarea
          name="email-text"
          id="email-text"
          cols="30"
          rows="10"
        ></textarea>
        <div className="email-btns">
          <div className="btns1">
            <button id="send">Send</button>
            <button>
              <img
                src="src\assets\icons\rubbish-bin-delete-button.png"
                alt=""
              />
            </button>
            <button>
              <img
                src="src\assets\icons\rubbish-bin-delete-button.png"
                alt=""
              />
            </button>
            <button>
              <img
                src="src\assets\icons\rubbish-bin-delete-button.png"
                alt=""
              />
            </button>
            <button>
              <img
                src="src\assets\icons\rubbish-bin-delete-button.png"
                alt=""
              />
            </button>
            <button>
              <img
                src="src\assets\icons\rubbish-bin-delete-button.png"
                alt=""
              />
            </button>
            <button>
              <img
                src="src\assets\icons\rubbish-bin-delete-button.png"
                alt=""
              />
            </button>
            <button>
              <img
                src="src\assets\icons\rubbish-bin-delete-button.png"
                alt=""
              />
            </button>
            <button>
              <img
                src="src\assets\icons\rubbish-bin-delete-button.png"
                alt=""
              />
            </button>
            <button>
              <img
                src="src\assets\icons\rubbish-bin-delete-button.png"
                alt=""
              />
            </button>
          </div>
          <div className="btns2">
            <button>
              <img
                src="src\assets\icons\rubbish-bin-delete-button.png"
                alt=""
              />
            </button>
            <button>
              <img
                src="src\assets\icons\rubbish-bin-delete-button.png"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reply
