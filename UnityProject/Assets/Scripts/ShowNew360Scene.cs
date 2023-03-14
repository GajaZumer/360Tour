using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ShowNew360Scene : MonoBehaviour
{
    [SerializeField] GameObject scene1;
    [SerializeField] GameObject scene2;

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
        //hide recent 360 scene and show new one
        scene1.SetActive(false);
        scene2.SetActive(true);
        //reset cursor texture
        Cursor.SetCursor(null, Vector2.zero, cursorMode);
    }

  
}
