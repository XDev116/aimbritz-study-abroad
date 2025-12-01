# Spline 3D Professor Character Guide

## 🎨 What is Spline?

Spline is a modern 3D design tool that allows you to create interactive 3D graphics directly in your browser. It's perfect for creating professional 3D characters that can be embedded in React applications.

**Website:** https://spline.design

---

## 🚀 Quick Start

### Step 1: Create Spline Account
1. Go to [spline.design](https://spline.design)
2. Click "Get Started" or "Sign Up"
3. Create a free account (Free plan includes 3D exports!)

### Step 2: Create New Project
1. Click "New File" in Spline dashboard
2. Choose "Blank" template
3. You'll see a 3D canvas with a camera view

---

## 👨‍🏫 Creating Your Professor Character

### Option A: Use Pre-made 3D Models (Easiest - 10 minutes)

#### 1. **Find Free 3D Models**
Visit these free 3D model libraries:

- **Sketchfab** (sketchfab.com)
  - Search: "professor" or "teacher" or "businessman 3D"
  - Filter: "Downloadable" + "Free"
  - Download format: `.glb` or `.gltf`

- **Mixamo** (mixamo.com) - Adobe's free character library
  - Pre-rigged characters with animations
  - Professional quality
  - Export as `.fbx` or `.glb`

- **Free3D** (free3d.com)
  - Search: "professor character"
  - Free models available

- **Poly Pizza** (poly.pizza)
  - Low-poly stylized characters
  - Perfect for web performance

#### 2. **Import into Spline**
1. In Spline, click **File → Import**
2. Select your downloaded `.glb` or `.gltf` file
3. Character will appear in the scene
4. Adjust size using the **Scale** tool (or press `S`)

#### 3. **Customize the Character**
1. **Add Professor Features:**
   - Click on the character
   - Add glasses (Import or create with Cube → Round)
   - Add mortarboard cap (Cylinder + Cube + Sphere)
   - Change colors to match your theme

2. **Lighting:**
   - Click **Add → Light → Directional Light**
   - Position above and in front of character
   - Adjust intensity to 1.5-2.0

3. **Background:**
   - Add gradient background: **Add → Environment → Gradient**
   - Colors: Blue (#3B82F6) to White (#FFFFFF)

#### 4. **Add Simple Animation** (Optional)
1. Select character
2. Click **Animation** tab (bottom right)
3. Add keyframe at 0s: Character normal
4. Add keyframe at 1s: Character waving (rotate arm)
5. Add keyframe at 2s: Back to normal
6. Set to **Loop**

---

### Option B: Build from Scratch (Advanced - 1-2 hours)

If you want complete control, build the character using basic shapes:

#### 1. **Head**
- Add **Sphere** (press `P` → Sphere)
- Scale to oval shape: `S` + drag
- Color: Skin tone (#FFB88C)

#### 2. **Body**
- Add **Cylinder** for torso
- Scale: Taller, thinner
- Color: Blue (#3B82F6) for shirt

#### 3. **Arms**
- Add **Cylinder** × 2
- Rotate and position on sides
- Add **Sphere** × 2 for hands

#### 4. **Legs**
- Add **Cylinder** × 2
- Color: Gray (#374151) for pants
- Add **Capsule** × 2 for shoes (black)

#### 5. **Professor Details**
- **Glasses**: Two circles + bridge (thin cylinders)
- **Hair**: Gray spheres or custom shape
- **Mortarboard Cap**: Flat cube + tassel (cylinder + sphere)
- **Tablet/Clipboard**: Thin rectangle in hand

#### 6. **Facial Features**
- Eyes: Small dark spheres
- Nose: Small triangle
- Mouth: Curved line or smile shape

---

## 🎬 Adding Animations

### Idle Animation (Breathing effect)
1. Select body/torso
2. Animation tab → New animation → "idle"
3. Keyframe 0s: Normal scale
4. Keyframe 1s: Scale Y slightly larger (1.02)
5. Keyframe 2s: Back to normal
6. Set to **Loop**

### Waving Animation
1. Select arm
2. Animation tab → New animation → "wave"
3. Keyframe 0s: Arm down
4. Keyframe 0.5s: Arm raised (rotate)
5. Keyframe 1s: Arm waving (rotate more)
6. Keyframe 1.5s: Back down
7. Loop

### Floating Animation
1. Select entire character (group)
2. Animation tab → New animation → "float"
3. Keyframe 0s: Position Y = 0
4. Keyframe 2s: Position Y = 10
5. Keyframe 4s: Position Y = 0
6. Loop

---

## 📤 Exporting to React

### Step 1: Prepare Scene
1. **Position Camera:**
   - Select camera in scene tree
   - Frame character nicely (full body visible)
   - Zoom to fill most of viewport

2. **Optimize:**
   - Remove unused objects
   - Keep polygon count under 50k for web performance
   - Use simple materials (no complex shaders)

### Step 2: Export for Web
1. Click **Export** button (top right)
2. Choose **Code Export**
3. Select **React (Spline)** option
4. Click **Copy Code** or **Get Link**

### Step 3: Get Embed URL
After exporting, Spline will give you a URL like:
```
https://prod.spline.design/XXXXXXXXXXXXXXXX/scene.splinecode
```

Copy this URL!

---

## 🔗 Integrating into AimBritz

### Update chat-widget.tsx

The integration is already set up! Just replace the URL:

```typescript
<Spline
  scene="YOUR_SPLINE_URL_HERE"  // ← Paste your URL here
  className="w-full h-full"
/>
```

**Current placeholder URL:**
```
https://prod.spline.design/3dCQvx9zVgGXSBAq/scene.splinecode
```

**Replace with your URL:**
1. Open `components/chatbot/chat-widget.tsx`
2. Find line ~159 (the `<Spline>` component)
3. Replace `scene="..."` with your exported URL

---

## 🎨 Design Tips for Professor Character

### Colors
- **Shirt:** Professional blue (#3B82F6)
- **Pants:** Dark gray (#374151)
- **Skin:** Warm beige (#FFB88C)
- **Hair:** Gray/silver (#C0C0C0) for professor look
- **Glasses:** Dark frame (#1E293B)
- **Accessories:** Golden accents (#FBBF24)

### Proportions
- Head: 1 unit
- Body: 1.5 units
- Legs: 2 units
- Total height: ~4.5 units

### Lighting
- Key light: Front-top-left (white, intensity 1.5)
- Fill light: Front-right (soft white, intensity 0.8)
- Rim light: Back (blue tint, intensity 0.5)

### Background
- Gradient: Blue to white
- Or transparent (alpha enabled)

---

## ⚡ Performance Optimization

### File Size
- Target: Under 2MB for fast loading
- Use compressed textures
- Limit polygon count: 20k-50k
- Avoid complex materials

### Loading Speed
- Enable **Code Export → Optimize for Web**
- Use Spline's built-in compression
- Consider lazy loading (already implemented!)

### Mobile Performance
- Test on mobile devices
- Reduce polygon count if laggy
- Simplify animations
- Consider static image fallback for very old devices

---

## 🆓 Free Alternatives to Spline

If you want to explore other options:

### 1. **Ready Player Me** (readyplayer.me)
- Free 3D avatar creator
- Export as `.glb`
- Import into Spline or use directly

### 2. **Vectary** (vectary.com)
- Similar to Spline
- Free tier available
- Good for product design

### 3. **Three.js + Blender** (Advanced)
- Free and open source
- Full control
- Steeper learning curve
- Export from Blender → Import to React Three Fiber

---

## 🐛 Troubleshooting

### Character Not Loading
1. Check network in browser DevTools
2. Verify URL is correct
3. Ensure scene is published (not draft)
4. Try incognito mode (cache issue)

### Character Too Big/Small
In Spline:
1. Select character
2. Press `S` for scale
3. Drag to resize
4. Re-export

### Character Not Animating
1. Verify animation is set to **Loop**
2. Check animation is enabled in export settings
3. Ensure animation timeline has keyframes

### Performance Issues
1. Reduce polygon count
2. Simplify materials
3. Remove unused objects
4. Check file size (should be <2MB)

---

## 📚 Learning Resources

### Spline Tutorials
- **Official Docs:** docs.spline.design
- **YouTube:** Search "Spline tutorial character"
- **Spline Community:** community.spline.design

### 3D Modeling Basics
- **Blender Guru:** YouTube channel for 3D basics
- **Polygon:** Understanding 3D meshes
- **Materials:** How to apply textures and colors

---

## 🎯 Quick Checklist

Before integrating into your website:

- [ ] Character looks professional (suit, glasses, professor features)
- [ ] Camera angle is good (slightly from front-top)
- [ ] Lighting makes character visible and attractive
- [ ] Animation is smooth (if added)
- [ ] File size is under 2MB
- [ ] Scene is published in Spline
- [ ] URL is copied
- [ ] URL is pasted in `chat-widget.tsx` (line ~159)
- [ ] Test on localhost:3000
- [ ] Test on mobile device

---

## 💡 Pro Tips

1. **Keep it Simple:** Don't overcomplicate the character. Clean, simple design works best on web.

2. **Test Performance:** Use Chrome DevTools → Performance tab to check loading time.

3. **Backup:** Save multiple versions in Spline (File → Duplicate) before major changes.

4. **Mobile First:** Design for mobile view first, then scale up for desktop.

5. **Accessibility:** Ensure character doesn't block important content when chat is closed.

---

## 🔄 Current Implementation

**File:** `components/chatbot/chat-widget.tsx`
**Lines:** 1-17, 138-164

**What's Already Done:**
✅ Spline React package installed
✅ Dynamic import configured (no SSR issues)
✅ Loading spinner while character loads
✅ Responsive container (200×240px)
✅ Hover effects and animations
✅ Chat notification badge
✅ Greeting speech bubble
✅ Mobile responsive

**What You Need to Do:**
⏳ Create 3D character in Spline
⏳ Export and get URL
⏳ Replace placeholder URL in code

---

## 📞 Need Help?

If you get stuck:
1. Check Spline documentation: docs.spline.design
2. Watch Spline tutorial videos on YouTube
3. Join Spline Discord community
4. Post in Spline forums

---

**Good luck creating your 3D professor character! 🎓**

---

**Last Updated:** November 2025
**Author:** AimBritz Development Team
