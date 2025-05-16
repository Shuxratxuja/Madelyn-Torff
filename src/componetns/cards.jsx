import View from "./view-btn"

function Cards() {
    return (
        <div className="card">
            <div className="card-left">
                <p className="card-title">Project Name</p>
                <p className="card-desc">I created this personal project in order to show <br /> how to create an interface in Figma using a <br /> portfolio as an example.</p>
                <View/>
            </div>
            <img className="card-img" src="/card-img-2.png" alt="" />
        </div>
    )
}

export default Cards