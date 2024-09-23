import { useState } from "react"

export function TwitterFollowCard({name, userName}) {

    const [isFollowing, setIsFollowing] = useState(false)
    const classNameButton = isFollowing ? 'isFollowing' : ''
    const urlImg = `https://unavatar.io/${userName}`

    return(

        <section className="tw-followCard">
            <header className="tw-followCard-header">
                <img src={urlImg} alt={userName} />

                <div className="tw-followCard-info">
                    <p id="tw-followCard-infoName">{name}</p>
                    <p id="tw-followCard-infoUserName">@{userName}</p>
                </div>
            </header>

            <footer className="tw-followCard-footer">
                <button  className={classNameButton} onClick={() => {setIsFollowing(!isFollowing)}}>

                    {isFollowing ? 'Unfollow' : 'Follow'}

                </button>
            </footer>
        </section>
    )
}
