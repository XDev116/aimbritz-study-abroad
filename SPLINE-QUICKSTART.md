# Spline 3D Character - Quick Start Guide

## 🚀 5-Minute Setup

### Step 1: Get a Pre-made 3D Character (Fastest Method)

**Recommended Free 3D Models:**

1. **Mixamo** (easiest, professional quality)
   - URL: https://mixamo.com
   - Search: "Business Man" or "Teacher"
   - Download: GLB format
   - Time: 3 minutes

2. **Sketchfab**
   - URL: https://sketchfab.com/3d-models?features=downloadable&sort_by=-likeCount&type=models
   - Search: "professor 3D" or "teacher cartoon"
   - Filter: Downloadable, Free
   - Download: GLB format
   - Time: 5 minutes

3. **Ready Player Me** (create custom avatar)
   - URL: https://readyplayer.me/avatar
   - Create avatar in browser
   - Customize: Glasses, professional clothes
   - Export: GLB
   - Time: 5 minutes

---

### Step 2: Import to Spline

1. Go to https://spline.design
2. Sign up (free account)
3. Create New File → Blank
4. **File → Import** → Select your `.glb` file
5. Character appears in scene!

---

### Step 3: Adjust & Style

**Camera:**
- Click camera icon in left toolbar
- Position to show full character
- Zoom: Scroll wheel

**Lighting:**
- Click **+** → Light → Directional Light
- Drag to position above character
- Intensity: 1.5

**Background:**
- Click **+** → Environment → Gradient
- Top color: `#3B82F6` (blue)
- Bottom color: `#FFFFFF` (white)

**Scale Character:**
- Click character
- Press `S` key
- Drag to resize

---

### Step 4: Add Simple Animation (Optional)

**Floating Animation:**
1. Select entire character (click it)
2. Click **Animation** tab (bottom right)
3. Click **+ New Animation** → Name: "float"
4. At 0s: Position Y = 0 (add keyframe)
5. At 2s: Position Y = 20 (add keyframe)
6. At 4s: Position Y = 0 (add keyframe)
7. Enable **Loop** toggle
8. Click Play ▶️ to preview

---

### Step 5: Export for Web

1. Click **Export** button (top right corner)
2. Select **Code Export**
3. Choose **React (Spline)**
4. Click **Copy Link** or **Copy URL**

You'll get a URL like:
```
https://prod.spline.design/ABC123XYZ/scene.splinecode
```

---

### Step 6: Update Your Code

Open `components/chatbot/chat-widget.tsx`

Find line ~159:
```typescript
<Spline
  scene="https://prod.spline.design/3dCQvx9zVgGXSBAq/scene.splinecode"
  className="w-full h-full"
/>
```

Replace with YOUR URL:
```typescript
<Spline
  scene="https://prod.spline.design/YOUR_URL_HERE/scene.splinecode"
  className="w-full h-full"
/>
```

Save the file!

---

## 🎨 Styling Tips

### Make it Look Like a Professor

**In Spline:**
1. **Add Glasses:**
   - Click **+** → Cube
   - Scale very thin and wide
   - Position on face
   - Add two circles for lenses
   - Color: Black (#000000)

2. **Add Mortarboard Cap:**
   - Click **+** → Cube (flat, square)
   - Position on head
   - Add Cylinder for cap base
   - Add tiny Sphere for tassel (gold color)

3. **Change Hair Color to Gray:**
   - Click character's hair
   - Right panel → Material
   - Color: `#C0C0C0` (silver/gray)

4. **Professional Clothes:**
   - Click shirt/body
   - Color: Blue `#3B82F6`
   - Click pants
   - Color: Gray `#374151`

---

## 📊 Performance Checklist

Before going live:

- [ ] File size under 2MB (check in Export)
- [ ] Polygon count under 50k (shown in Spline stats)
- [ ] Animation is smooth (test at 30-60 FPS)
- [ ] Loads in under 3 seconds on 4G
- [ ] Works on mobile Chrome/Safari

---

## 🐛 Common Issues

### Issue: Character is upside down
**Fix:** In Spline, select character → Rotate X-axis by 180°

### Issue: Character is too big/small
**Fix:** Select character → Press `S` → Drag to resize

### Issue: Can't see character (too dark)
**Fix:** Add more lights → Directional Light + increase intensity

### Issue: Character not loading in website
**Fix:**
1. Check URL is correct
2. Verify scene is published (not draft) in Spline
3. Clear browser cache
4. Check browser console for errors

### Issue: Lag/slow performance
**Fix:**
1. Reduce polygon count in Spline
2. Simplify materials (remove complex shaders)
3. Remove animations
4. Use simpler 3D model

---

## 🎯 Keyboard Shortcuts in Spline

- `P` - Add primitive (Cube, Sphere, etc.)
- `S` - Scale tool
- `R` - Rotate tool
- `G` - Move tool
- `Space` - Play animation
- `F` - Frame selected object
- `Del` - Delete selected
- `Ctrl+D` - Duplicate
- `Ctrl+Z` - Undo
- `Ctrl+S` - Save

---

## 💡 Pro Tips

1. **Start Simple:** Use a pre-made model first, customize later
2. **Test Early:** Export and test in your website frequently
3. **Mobile First:** Design for mobile view (most users are on mobile)
4. **Keep File Small:** Compress textures, reduce polygons
5. **Use Gradients:** Gradient backgrounds look better than solid colors

---

## 📚 Best Free 3D Model Sites

### For Professor Characters:
1. **Mixamo** - Best for rigged, animated characters
2. **Sketchfab** - Huge library, many free
3. **Free3D** - Good variety
4. **TurboSquid** - Filter by "Free"
5. **CGTrader** - Free section available

### For Props (Glasses, Cap, etc.):
1. **Poly Pizza** - Low-poly assets
2. **Quaternius** - Free low-poly assets
3. **Kenney.nl** - Game assets (free)

---

## ✅ Final Checklist

Before deploying:

**Design:**
- [ ] Character looks professional
- [ ] Professor features visible (glasses, gray hair, cap)
- [ ] Good lighting (not too dark/bright)
- [ ] Nice background (gradient or transparent)
- [ ] Camera angle is flattering

**Performance:**
- [ ] File loads quickly (<3s)
- [ ] Animations are smooth
- [ ] Works on mobile
- [ ] No console errors

**Integration:**
- [ ] URL is correct in `chat-widget.tsx`
- [ ] Character is visible on homepage
- [ ] Chat button still works
- [ ] Character doesn't block content
- [ ] Responsive on all screen sizes

---

## 🎓 What You Accomplished

✅ **Installed Spline React integration**
- Package: `@splinetool/react-spline`
- Dynamic loading configured
- No SSR issues

✅ **Updated Chat Widget**
- Removed old SVG character
- Added 3D Spline component
- Kept all existing functionality (chat, animations, notifications)

✅ **Next Steps for You:**
1. Create/download 3D professor character
2. Import to Spline (spline.design)
3. Customize and style
4. Export and get URL
5. Paste URL in code (line 159 of chat-widget.tsx)
6. Test and deploy!

---

## 🔗 Useful Links

- **Spline Editor:** https://spline.design
- **Spline Docs:** https://docs.spline.design
- **Spline Community:** https://community.spline.design
- **Mixamo (Free Characters):** https://mixamo.com
- **Sketchfab (3D Models):** https://sketchfab.com
- **Ready Player Me (Avatar Creator):** https://readyplayer.me

---

## 📞 Support

If stuck:
1. Check full guide: `SPLINE-CHARACTER-GUIDE.md`
2. Watch Spline tutorials on YouTube
3. Check Spline documentation
4. Post in Spline community forum

---

**Estimated Time to Complete:**
- With pre-made model: **10-15 minutes**
- Building from scratch: **1-2 hours**
- Learning Spline basics: **30 minutes**

---

**You're almost there! Just create the character in Spline and paste the URL. Good luck! 🎨✨**
