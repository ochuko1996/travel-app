import { StyleSheet } from "react-native";

const reuseable = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,

    },
    rowWithSpace: (justifyContent)=>({
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: justifyContent
    })
})
export default reuseable