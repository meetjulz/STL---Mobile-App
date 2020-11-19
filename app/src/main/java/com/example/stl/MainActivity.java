package com.example.stl;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.webkit.WebChromeClient;
import android.webkit.WebView;


public class MainActivity extends AppCompatActivity {

    private WebView view;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate( savedInstanceState );
        setContentView(R.layout.activity_main);

        WebView mWebView = (WebView) findViewById(R.id.my_web_view);
        mWebView.getSettings().setDefaultTextEncodingName("utf-8");
        mWebView.getSettings().setJavaScriptEnabled(true);
        mWebView.setWebChromeClient(new WebChromeClient());


        Intent intent = new Intent();
        intent.setPackage(" woyou. Aidlservice. Jiuiv5 ");
        intent.setAction (" woyou. Aidlservice. Jiuiv5. IWoyouService ");
        startService(intent); // Start printer service
        bindService (intent, connService, Context.BIND_AUTO_CREATE);



        mWebView.loadUrl("file:///android_asset/stl/index.html");
    }

}
