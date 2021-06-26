export const Spinner = (props) => {
    return(
        <div className="loading-content" id="spinner" style={{position:'fixed'}}>
            <div className="loading">
              <p>loading</p>
              <span></span>
            </div>
          </div>
    );
}