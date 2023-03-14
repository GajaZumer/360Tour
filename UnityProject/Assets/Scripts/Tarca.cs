using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Tarca : MonoBehaviour
{
    [SerializeField] Texture2D cursorTexture;
    private CursorMode cursorMode = CursorMode.Auto;
    private Vector2 hotSpot = Vector2.zero;

    [SerializeField] ParticleSystem PStarca;

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
        //play the particle system and hide target on collision
        PStarca.Play();
        this.gameObject.SetActive(false);
        //reset cursor texture
        Cursor.SetCursor(null, Vector2.zero, cursorMode);
    }


}
