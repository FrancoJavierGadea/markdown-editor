import styled from "styled-components";


const StyledLabel = styled.label`

    i:hover {
        color: #0d6efd;
    }
`;

function FileLoader({onChange}){

    const change = ({target}) => {

        const file = target.files[0];

        const reader = new FileReader();

        reader.onload = () => {

            //console.log(reader.result);

            onChange(reader.result);
        }

        reader.readAsText(file);
    }

    return (<StyledLabel className="text-light"  style={{fontSize: '26px'}} title="Cargar Archivo">

        <i className="bi bi-upload"></i>

        <input type="file" className="d-none" accept=".md, .markdown" onChange={change} />
        
    </StyledLabel>);
}

export default FileLoader;