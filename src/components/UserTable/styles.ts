import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    row: {
        height: 90
    },
    columnTitle: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    tableName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 10
    }
});

export default useStyles;