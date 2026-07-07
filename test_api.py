import openai
import os
from dotenv import load_dotenv

load_dotenv()

api_key = os.getenv('OPENAI_API_KEY')

if not api_key:
    print("❌ OPENAI_API_KEY not found in .env file!")
    print("Please add: OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxxxxx")
else:
    print(f"✅ API Key found: {api_key[:20]}...")
    
    try:
        client = openai.OpenAI(api_key=api_key)
        
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "user", "content": "Say hello in one word"}
            ],
            max_tokens=10
        )
        
        print(f"✅ OpenAI API is WORKING! Response: {response.choices[0].message.content}")
        
    except Exception as e:
        print(f"❌ OpenAI API Error: {e}")