package com.japandriverslicense;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;

/**
 * Created by shashank on 2018/01/07.
 */

public class SplashActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        
        Intent intent = new Intent(this, MainActivity.class);
        startActivity(intent);
        finish();
    }
}