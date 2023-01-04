import './Toggle.css';
const Toggle = ({monthly, onChange}) => {
    return (
            <label className="toggle">
                <input type="checkbox" defaultChecked={monthly} onChange={onChange}/>
                    <span className="slider"></span>
                    <span className="labels" data-on="Individually" data-off="Monthly"></span>
            </label>
    )
}
export default Toggle;
