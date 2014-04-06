﻿#pragma strict

public class OGMenuItems extends MonoBehaviour {
	// Helper functions
	private static function PlaceObject ( go : GameObject, scale : Vector3 ) {
		var parent : GameObject = Selection.activeGameObject;
		var root : OGRoot = GameObject.FindObjectOfType(OGRoot);
		
		if ( !parent && root ) {
			parent = root.currentPage.gameObject;
		}
		
		go.transform.parent = parent.transform;

		go.transform.localPosition = Vector3.zero;
		go.transform.localScale = scale;
		go.transform.localEulerAngles = Vector3.zero;
		
		Selection.activeGameObject = go;
	}

	// Menu functions
	@MenuItem ("OpenGUI/New Root")
	static function NewRoot () {
		var go : GameObject = new GameObject ( "Root", Camera, OGRoot );
	}

	@MenuItem ("OpenGUI/New Page")
	static function NewPage () {
		var go : GameObject = new GameObject ( "Page", OGPage );
		var root : OGRoot = GameObject.FindObjectOfType(OGRoot);

		if ( !root ) {
			Debug.LogWarning ( "No root in scene!" );
			DestroyImmediate ( go );
		} else {
			go.transform.parent = root.transform;
			go.transform.position = Vector3.one;
			go.transform.localScale = Vector3.one;
			go.transform.localEulerAngles = Vector3.zero;
			root.SetCurrentPage ( go.GetComponent(OGPage) );
		}

		Selection.activeGameObject = go;
	}

	@MenuItem ("OpenGUI/Widgets/Button")
	static function NewButton () {
		var w : OGButton = new GameObject ( "Button", OGButton ).GetComponent(OGButton);

		PlaceObject ( w.gameObject, new Vector3 ( 100, 30, 1 ) );

		w.text = "Button";
		w.GetDefaultStyles ();
	}

	@MenuItem ("OpenGUI/Widgets/DropDown")
	static function NewDropDown () {
		var w : OGDropDown = new GameObject ( "DropDown", OGDropDown ).GetComponent(OGDropDown);

		PlaceObject ( w.gameObject, new Vector3 ( 140, 20, 1 ) );

		w.title = "Dropdown Menu";
		w.GetDefaultStyles ();
	}
	
	@MenuItem ("OpenGUI/Widgets/Label")
	static function NewLabel () {
		var w : OGLabel = new GameObject ( "Label", OGLabel ).GetComponent(OGLabel);

		PlaceObject ( w.gameObject, new Vector3 ( 140, 20, 1 ) );

		w.text = "New Label";
		w.GetDefaultStyles ();
	}
	
	@MenuItem ("OpenGUI/Widgets/PopUp")
	static function NewPopUp () {
		var w : OGPopUp = new GameObject ( "PopUp", OGPopUp ).GetComponent(OGPopUp);

		PlaceObject ( w.gameObject, new Vector3 ( 100, 20, 1 ) );

		w.title = "Popup Menu";
		w.GetDefaultStyles ();
	}
	
	@MenuItem ("OpenGUI/Widgets/ProgressBar")
	static function NewProgressBar () {
		var w : OGProgressBar = new GameObject ( "ProgressBar", OGProgressBar ).GetComponent(OGProgressBar);

		PlaceObject ( w.gameObject, new Vector3 ( 200, 30, 1 ) );

		w.padding = new Vector2 ( 8, 8 );
		w.GetDefaultStyles ();
	}
	
	@MenuItem ("OpenGUI/Widgets/ScrollView")
	static function NewScrollView () {
		var w : OGScrollView = new GameObject ( "ScrollView", OGScrollView ).GetComponent(OGScrollView);

		PlaceObject ( w.gameObject, new Vector3 ( 1, 1, 1 ) );
		
		w.size = new Vector2 ( 400, 300 );
		w.GetDefaultStyles ();
	}
	
	@MenuItem ("OpenGUI/Widgets/SlicedSprite")
	static function NewSlicedSprite () {
		var w : OGSlicedSprite = new GameObject ( "SlicedSprite", OGSlicedSprite ).GetComponent(OGSlicedSprite);

		PlaceObject ( w.gameObject, new Vector3 ( 200, 200, 1 ) );
		
		w.GetDefaultStyles ();
	}
	
	@MenuItem ("OpenGUI/Widgets/Slider")
	static function NewSlider () {
		var w : OGSlider = new GameObject ( "Slider", OGSlider ).GetComponent(OGSlider);

		PlaceObject ( w.gameObject, new Vector3 ( 200, 20, 1 ) );
		
		w.GetDefaultStyles ();
	}
	
	@MenuItem ("OpenGUI/Widgets/Sprite")
	static function NewSprite () {
		var w : OGSprite = new GameObject ( "Sprite", OGSprite ).GetComponent(OGSprite);

		PlaceObject ( w.gameObject, new Vector3 ( 200, 20, 1 ) );
		
		w.GetDefaultStyles ();
	}
	
	@MenuItem ("OpenGUI/Widgets/Tabs")
	static function NewTabs () {
		var w : OGTabs = new GameObject ( "Tabs", OGTabs ).GetComponent(OGTabs);

		PlaceObject ( w.gameObject, new Vector3 ( 200, 20, 1 ) );
		
		w.GetDefaultStyles ();
	}
	
	@MenuItem ("OpenGUI/Widgets/TextField")
	static function NewTextField () {
		var w : OGTextField = new GameObject ( "TextField", OGTextField ).GetComponent(OGTextField);

		PlaceObject ( w.gameObject, new Vector3 ( 200, 20, 1 ) );
		
		w.GetDefaultStyles ();
	}
	
	@MenuItem ("OpenGUI/Widgets/Texture")
	static function NewTexture () {
		var w : OGTexture = new GameObject ( "Texture", OGTexture ).GetComponent(OGTexture);

		PlaceObject ( w.gameObject, new Vector3 ( 120, 120, 1 ) );
	}
	
	@MenuItem ("OpenGUI/Widgets/TickBox")
	static function NewTickBox () {
		var w : OGTickBox = new GameObject ( "TickBox", OGTickBox ).GetComponent(OGTickBox);

		PlaceObject ( w.gameObject, new Vector3 ( 200, 20, 1 ) );
		
		w.text = "Tickbox";
		w.GetDefaultStyles ();
	}
}
