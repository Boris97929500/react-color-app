export default{
    root: {
        backgroundColor: "blue",
        height: "130vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
    },
    container:{
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap",
    },
    nav: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        color: "white",
        alignItems: "center",
        "& a": {
            color: "white",
            textDecoration: "none",
            fontWeight: "500",
            paddingRight: "2rem"
        }
    },
    palettes:{
        boxSizing: "border-box",
        width:"100%",
        display:"grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "4%"
    }
}