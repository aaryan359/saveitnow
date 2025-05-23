import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {

        backgroundColor: '#F9FAFB',
        padding: 16,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#0601B4',
        padding: 16,
        borderRadius: 12,
        marginBottom: 20,
    },
    userimagecontainer: {
        marginRight: 12,
    },
    userdatacontainer: {
        flex: 1,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    name: {
        fontSize: 16,
        fontWeight: '500',
        color: '#fff',
        fontFamily: 'Poppins',
    },
    username: {
        fontSize: 13,
        color: '#D1D5DB',
    },
    editContainer: {
        padding: 8,
        borderRadius: 8,
    },
    editicon: {
        width: 25,
        height: 25,

    },
    MainContainer: {
        marginBottom: 20,
        backgroundColor: '#fff',
        borderRadius: 12,
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        gap: 5,
        marginVertical: 10,
    },

    listcontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 14,
        paddingHorizontal: 12,
        borderRadius: 10,
        elevation: 1,

        gap: 10,
    },

    lefticon: {
        width: 24,
        height: 24,
        marginRight: 12,
    },
    datacontainer: {
        flex: 1,
    },
    heading: {
        fontSize: 15,
        fontWeight: '500',
        fontFamily: 'Poppins',
        color: '#111827',
    },
    detail: {
        fontSize: 12,
        color: '#6B7280',
        marginTop: 2,
    },
    righticon: {
        width: 18,
        height: 18,
        tintColor: '#9CA3AF',
        marginLeft: 8,
    },
    alerticon: {
        width: 16,
        height: 16,
        tintColor: '#F87171',
        marginHorizontal: 6,
    },
    footerContainer: {
        borderTopWidth: 1,
        borderTopColor: '#E5E7EB',
        paddingTop: 16,
    },
});
