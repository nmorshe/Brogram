import PropTypes from "prop-types";
import { createPortal } from "react-dom";

/**
 * Component that creates a that creates a
 * dialog box or pop-up window, temporarily blocking
 * interaction with the rest of the application until
 * the user addresses it.
 * 
 * Renders in the div "portal" element instead of the 
 * div "root" element.
 * 
 * @returns JSX Modal element
 */

const Modal = ({showExerciseDescription, handleCloseModal}) => {
    
    const {name, description} = showExerciseDescription || {};
    
    return createPortal((
        <div className='modal-container'>
            <button className='modal-underlay' onClick={handleCloseModal} />
            <div className="modal-content">
                <div>
                    <h6>Name</h6>
                    <h2 className="skill-name">{name.replaceAll('-', ' ')}</h2>
                </div>

                <div>
                    <h6>Description</h6>
                    <p>{description}</p>
                </div>

            </div>
        </div>
    ),
        document.getElementById('portal'))
}

Modal.propTypes = {
    showExerciseDescription: PropTypes.any,
    handleCloseModal: PropTypes.func
}

export default Modal;