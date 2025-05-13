export default function ConditionalContent()
{
    let user = {
        "name" : "Mark Wahlberg",
        "isPremium":false
        }
    return(
        <div>          
            <p>{user.isPremium? "Thank you for being a premium member !" : "Upgrade to premium to enjoy exclusive features !"}</p>
        </div>
    );
}