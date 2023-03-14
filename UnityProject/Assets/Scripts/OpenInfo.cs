using System.Collections;
using UnityEngine;

public class OpenInfo : MonoBehaviour
{
    [SerializeField] Texture2D cursorTexture;
    private CursorMode cursorMode = CursorMode.Auto;
    private Vector2 hotSpot = Vector2.zero;

    //called when the mouse enters the Collider
    void OnMouseEnter()
    {
        //change cursor texture
        Cursor.SetCursor(cursorTexture, hotSpot, cursorMode);
    }

    //called when the mouse is not any longer over the Collider
    void OnMouseExit()
    {
        //reset cursor texture
        Cursor.SetCursor(null, Vector2.zero, cursorMode);
    }

    //called when the user has pressed the mouse button while over the Collider
    void OnMouseDown()
    {
        //opens the URL specified
        Application.OpenURL("https://www.ljubljanskigrad.si/sl/nacrtovanje-obiska/info-center-in-prodajna-mesta/");
    }
}
